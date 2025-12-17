"use server";

import { Cat } from "@/features/cats";
import { updateFavoriteCat } from "@/server/repos/cats.repo";

export async function renameFavoriteCatAction(userId: string, cat: Cat) {
  const favoriteCat = await updateFavoriteCat(userId, cat);
  return favoriteCat;
}
