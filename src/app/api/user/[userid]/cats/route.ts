import { Cat } from "@/src/features/cats/index";
import { addFavoriteCat, getCatsByUserId } from "@/src/server/repos/cats.repo";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { userid: string; cat: Cat } }
) {
  try {
    const userId = params.userid;
    if (!userId) {
      return NextResponse.json(
        { error: "Missing userid in path" },
        { status: 400 }
      );
    }

    const body = await request.json();
    if (!body || (!body.id && body.id !== 0) || !body.url) {
      return NextResponse.json(
        { error: "Request body must include 'id' and 'url'" },
        { status: 400 }
      );
    }

    addFavoriteCat(userId, body.cat as Cat);
    return NextResponse.json({ ok: true, favorite: body.cat }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: String(err?.message ?? err) },
      { status: 500 }
    );
  }
}

// Optional: allow GET to list favorites for a user
export async function GET(
  _request: Request,
  { params }: { params: { userid: string } }
) {
  const userId = params.userid;
  if (!userId)
    return NextResponse.json({ error: "Missing userid" }, { status: 400 });
  const list = await getCatsByUserId(userId);
  return NextResponse.json({ ok: true, favorites: list });
}
