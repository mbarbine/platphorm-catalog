import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "platphorm-catalog",
    version: "1.0.0",
    tools: []
  });
}
