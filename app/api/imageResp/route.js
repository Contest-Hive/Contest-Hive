import { ImageResponse } from "next/server";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`Hash: ${Math.random().toString(36).substring(7)}`}
      </div>
    ),
    {
      width: 1920,
      height: 1090,
    },
  );
}
