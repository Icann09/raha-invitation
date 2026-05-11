import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#000",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background Image */}
        <img
          src="https://raha-invitation.vercel.app/images/luxury01/wedding-preview.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
          }}
        />

        {/* Text */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 60,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontSize: 34,
              opacity: 0.8,
            }}
          >
            The Wedding of
          </div>

          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              marginTop: 10,
            }}
          >
            Dillo & Alisyah
          </div>

          <div
            style={{
              fontSize: 32,
              marginTop: 20,
              opacity: 0.9,
            }}
          >
            Sabtu, 18 Mei 2026
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1350,
    }
  );
}