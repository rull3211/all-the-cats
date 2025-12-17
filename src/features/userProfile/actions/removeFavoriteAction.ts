"use server";

import { Cat } from "@/src/features/cats";
import { removeFavoriteCat } from "@/src/server/repos/cats.repo";

export async function removeFavoriteCatAction(
  userId: string,
  id: string | number
) {
  const favoriteCat = await removeFavoriteCat(userId, id);
  return favoriteCat;
}
