import { Cat } from "@/src/features/cats/index";
import { addFavoriteCat, getCatsByUserId } from "@/src/server/repos/cats.repo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ userid: string }> }
) {
  const { userid } = await context.params;
  if (!userid) {
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

  addFavoriteCat(userid, body as Cat);
  return NextResponse.json({ ok: true, favorite: body }, { status: 201 });
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ userid: string }> }
) {
  const { userid } = await context.params;
  if (!userid)
    return NextResponse.json({ error: "Missing userid" }, { status: 400 });

  const list = await getCatsByUserId(userid);
  return NextResponse.json({ ok: true, favorites: list });
}
