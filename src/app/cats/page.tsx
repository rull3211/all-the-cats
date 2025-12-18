import CatGrid from "@/src/features/cats/components/CatGridClient";
import { fetchCats } from "@/src/server/externalApi/fetchCatsFromApi.api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All The Cats",
  description: "A comprehensive collection of all the cats",
};

export default async function Cats() {
  const cats = await fetchCats({ limit: 20 });
  return <CatGrid cats={cats} />;
}
