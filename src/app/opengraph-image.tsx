import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LearnAI — Formations IA Premium";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a1a 0%, #1a0a2e 50%, #0a0a1a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #a855f7, #3b82f6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              color: "white",
              fontWeight: 700,
            }}
          >
            AI
          </div>
          <span
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "white",
            }}
          >
            LearnAI
          </span>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#c4b5fd",
            marginBottom: "48px",
            textAlign: "center",
          }}
        >
          Formations IA Premium — De débutant à expert
        </div>
        <div
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          {[
            { num: "5", label: "Formations" },
            { num: "97", label: "Chapitres" },
            { num: "9,90€", label: "Par cours" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px 32px",
                borderRadius: "16px",
                border: "1px solid rgba(168, 85, 247, 0.3)",
                background: "rgba(168, 85, 247, 0.1)",
              }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {stat.num}
              </span>
              <span style={{ fontSize: "16px", color: "#a0a0b5" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
