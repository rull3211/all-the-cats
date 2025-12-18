import { fetchCats } from "@/src/server/externalApi/fetchCatsFromApi.api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
  const url = new URL(request.url);
  const limitParam = url.searchParams.get("limit");
  const limit = limitParam ? parseInt(limitParam) : 10; // default to 10

  const list = await fetchCats({ limit });
  return NextResponse.json({ ok: true, favorites: list });
}
