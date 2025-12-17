import "server-only";
import { Cat } from "@/src/features/cats/index";
declare global {
  var FAVORITES_STORE: Record<string, Cat[]> | undefined;
}

global.FAVORITES_STORE ||= {};

export async function getCatsByUserId(userId: string): Promise<Cat[]> {
  console.log("Fetching cats for user:", global.FAVORITES_STORE);
  return global.FAVORITES_STORE?.[userId] ?? [];
}

export async function addFavoriteCat(userId: string, cat: Cat): Promise<Cat> {
  const list = global.FAVORITES_STORE![userId] ?? [];

  const exists = list.find((c) => String(c.id) === String(cat.id));
  if (exists) return exists;

  list.push(cat);
  global.FAVORITES_STORE![userId] = list;
  return cat;
}

export async function updateFavoriteCat(
  userId: string,
  cat: Cat
): Promise<Cat | null> {
  const list = global.FAVORITES_STORE?.[userId];
  if (!list) return null;

  const index = list.findIndex((c) => String(c.id) === String(cat.id));
  if (index === -1) return null;

  list[index] = cat;
  global.FAVORITES_STORE![userId] = list;
  return cat;
}

export async function removeFavoriteCat(
  userId: string,
  catId: string | number
): Promise<boolean> {
  const list = global.FAVORITES_STORE?.[userId];
  if (!list) return false;

  const index = list.findIndex((c) => String(c.id) === String(catId));
  if (index === -1) return false;

  list.splice(index, 1);
  global.FAVORITES_STORE![userId] = list;
  return true;
}
