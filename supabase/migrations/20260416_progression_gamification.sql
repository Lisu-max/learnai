-- ==========================================
-- LearnAI — Gamification: XP, Badges, Certificates, Leaderboard
-- Migration 2026-04-16
-- ==========================================

-- 1. USER_STATS TABLE
CREATE TABLE IF NOT EXISTS user_stats (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_xp INTEGER NOT NULL DEFAULT 0,
  level INTEGER NOT NULL DEFAULT 1,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_activity TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own stats" ON user_stats
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role full access on user_stats" ON user_stats
  FOR ALL USING (auth.role() = 'service_role');

CREATE INDEX idx_user_stats_total_xp ON user_stats (total_xp DESC);

-- 2. USER_BADGES TABLE
CREATE TABLE IF NOT EXISTS user_badges (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  badge_slug TEXT NOT NULL,
  earned_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, badge_slug)
);

ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own badges" ON user_badges
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role full access on user_badges" ON user_badges
  FOR ALL USING (auth.role() = 'service_role');

CREATE INDEX idx_user_badges_user_id ON user_badges (user_id);

-- 3. CERTIFICATES TABLE
CREATE TABLE IF NOT EXISTS certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_slug TEXT NOT NULL,
  score INTEGER NOT NULL,
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  verify_code TEXT NOT NULL UNIQUE,
  UNIQUE(user_id, course_slug)
);

ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own certificates" ON certificates
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Service role full access on certificates" ON certificates
  FOR ALL USING (auth.role() = 'service_role');

CREATE INDEX idx_certificates_verify_code ON certificates (verify_code);

-- 4. MATERIALIZED VIEW: LEADERBOARD
CREATE MATERIALIZED VIEW leaderboard_view AS
SELECT
  us.user_id,
  CONCAT(
    SPLIT_PART(COALESCE(p.full_name, 'Anonyme'), ' ', 1),
    ' ',
    LEFT(SPLIT_PART(COALESCE(p.full_name, 'Anonyme'), ' ', 2), 1),
    '.'
  ) AS display_name,
  us.total_xp,
  us.level,
  ROW_NUMBER() OVER (ORDER BY us.total_xp DESC) AS rank
FROM user_stats us
JOIN profiles p ON p.id = us.user_id
WHERE us.total_xp > 0;

CREATE UNIQUE INDEX idx_leaderboard_user_id ON leaderboard_view (user_id);
CREATE INDEX idx_leaderboard_rank ON leaderboard_view (rank);

-- 5. TRIGGER: auto-create user_stats on new auth.users insert
CREATE OR REPLACE FUNCTION handle_new_user_stats()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created_stats
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_new_user_stats();

-- 6. FUNCTION: refresh leaderboard view
CREATE OR REPLACE FUNCTION refresh_leaderboard_view()
RETURNS VOID AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY leaderboard_view;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 7. FUNCTION: get user rank
CREATE OR REPLACE FUNCTION get_user_rank(p_user_id UUID)
RETURNS TABLE (rank BIGINT, total_xp INTEGER, display_name TEXT) AS $$
BEGIN
  RETURN QUERY
  SELECT lv.rank, lv.total_xp, lv.display_name
  FROM leaderboard_view lv
  WHERE lv.user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
