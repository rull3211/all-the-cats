import { fetchCats } from "@/src/server/externalApi/fetchCatsFromApi.api";
import { NextResponse } from "next/server";

// Optional: allow GET to list favorites for a user
export async function GET(
  _request: Request,
  { params }: { params: { limit: number } }
) {
  const limit = params.limit;
  const list = await fetchCats({ limit });
  return NextResponse.json({ ok: true, favorites: list });
}
