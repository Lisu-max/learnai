"use client";

import { useEffect, useState } from "react";

const IN_APP_PATTERNS = [
  /FBAN|FBAV|FB_IAB/i,
  /Instagram/i,
  /LinkedInApp/i,
  /Twitter/i,
  /TikTok|musical_ly|Bytedance|ByteLocale/i,
  /Messenger|MessengerLite/i,
  /MicroMessenger/i,
  /Snapchat/i,
  /Line\//i,
  /; wv\)/i,
];

export type InAppBrowser =
  | "instagram"
  | "facebook"
  | "messenger"
  | "linkedin"
  | "twitter"
  | "tiktok"
  | "snapchat"
  | "wechat"
  | "line"
  | "android-webview"
  | "other"
  | null;

function identify(ua: string): InAppBrowser {
  if (/Instagram/i.test(ua)) return "instagram";
  if (/FBAN|FBAV|FB_IAB/i.test(ua)) return "facebook";
  if (/Messenger|MessengerLite/i.test(ua)) return "messenger";
  if (/LinkedInApp/i.test(ua)) return "linkedin";
  if (/Twitter/i.test(ua)) return "twitter";
  if (/TikTok|musical_ly|Bytedance|ByteLocale/i.test(ua)) return "tiktok";
  if (/Snapchat/i.test(ua)) return "snapchat";
  if (/MicroMessenger/i.test(ua)) return "wechat";
  if (/Line\//i.test(ua)) return "line";
  if (/; wv\)/i.test(ua)) return "android-webview";
  if (IN_APP_PATTERNS.some((p) => p.test(ua))) return "other";
  return null;
}

export function useInAppBrowser() {
  const [browser, setBrowser] = useState<InAppBrowser>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    // userAgent is only available client-side, sync it once on mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setBrowser(identify(navigator.userAgent));
    setReady(true);
  }, []);

  return { browser, isInApp: browser !== null, ready };
}
