"use server";

import { Cat } from "@/src/features/cats";
import { updateFavoriteCat } from "@/src/server/repos/cats.repo";

export async function renameFavoriteCatAction(userId: string, cat: Cat) {
  const favoriteCat = await updateFavoriteCat(userId, cat);
  return favoriteCat;
}
