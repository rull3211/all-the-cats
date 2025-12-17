"use server";

import { addFavoriteCat } from "@/server/repos/cats.repo";
import { Cat } from "../types/Cat";

export async function favoriteCatAction(userId: string, cat: Cat) {
  const favoriteCat = await addFavoriteCat(userId, cat);
  return favoriteCat;
}
