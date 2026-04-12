-- ==========================================
-- SECURITY FIX — RLS Policy Hardening
-- Fixes P1 vulnerabilities:
--   1. purchases INSERT allows fake purchases (bypass payment)
--   2. profiles UPDATE allows self-promotion to 'pro' subscription
-- ==========================================

-- ─── PURCHASES TABLE ─────────────────────────────────────────────────────────

-- Remove the permissive INSERT policy that allows authenticated users
-- to insert fake purchases directly (bypassing Stripe)
DROP POLICY IF EXISTS "Users can insert own purchases" ON purchases;

-- Purchases are now ONLY inserted by the service role (Stripe webhook)
-- which bypasses RLS. Authenticated users have no INSERT access.
-- This means the Stripe webhook (using SUPABASE_SERVICE_ROLE_KEY) still works,
-- but no client-side code can fake a purchase.


-- ─── PROFILES TABLE ──────────────────────────────────────────────────────────

-- Remove the overly permissive UPDATE policy that allows users to update
-- any column including subscription_status, stripe_customer_id, etc.
DROP POLICY IF EXISTS "Users can update own profile" ON profiles;

-- New restricted UPDATE policy: users can only update safe personal fields
-- subscription_status, stripe_customer_id, subscription_id, subscription_end_date
-- are NOT updatable by the user — only the service role (Stripe webhook) can modify them
CREATE POLICY "Users can update own profile safe fields" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    -- Prevent users from escalating subscription_status
    -- by checking that sensitive fields are not being changed
    -- Note: Supabase doesn't support column-level policies directly,
    -- so we use a function-based approach below
  );

-- Drop and recreate with column-level protection via a security function
DROP POLICY IF EXISTS "Users can update own profile safe fields" ON profiles;

CREATE OR REPLACE FUNCTION is_safe_profile_update()
RETURNS BOOLEAN AS $$
DECLARE
  new_row profiles;
  old_row profiles;
BEGIN
  -- Get the current (old) row
  SELECT * INTO old_row FROM profiles WHERE id = auth.uid();

  -- The NEW record is available in the trigger context via NEW pseudo-variable
  -- In RLS WITH CHECK, we compare against what would be set
  -- We block changes to sensitive columns by checking they match the existing values
  RETURN TRUE; -- Base case: allow, column check done via app-level validation
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Practical approach: use separate restricted UPDATE policy
-- Users can update only: full_name, email (safe fields)
-- Stripe/subscription fields remain service-role only
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id
    AND (
      -- Ensure subscription_status is not being elevated
      -- by requiring it equals the existing value
      subscription_status = (SELECT subscription_status FROM profiles WHERE id = auth.uid())
      AND stripe_customer_id IS NOT DISTINCT FROM (SELECT stripe_customer_id FROM profiles WHERE id = auth.uid())
      AND subscription_id IS NOT DISTINCT FROM (SELECT subscription_id FROM profiles WHERE id = auth.uid())
      AND subscription_end_date IS NOT DISTINCT FROM (SELECT subscription_end_date FROM profiles WHERE id = auth.uid())
    )
  );


-- ─── VERIFICATION ────────────────────────────────────────────────────────────
-- After running this migration, verify:
-- 1. Stripe webhook (service role) can still INSERT purchases → YES (bypasses RLS)
-- 2. Stripe webhook can still UPDATE profiles.subscription_status → YES (bypasses RLS)
-- 3. Authenticated user CANNOT INSERT into purchases → YES (no INSERT policy)
-- 4. Authenticated user CANNOT change subscription_status → YES (WITH CHECK blocks it)
-- 5. Authenticated user CAN update full_name, email → YES (other fields unchanged)

-- Test query to verify (run as authenticated user, should fail):
-- UPDATE profiles SET subscription_status = 'pro' WHERE id = auth.uid();
-- → ERROR: new row violates row-level security policy
