import CatGrid from "@/src/features/cats/components/CatGridClient";
import { fetchCats } from "@/src/server/externalApi/fetchCatsFromApi.api";

export default async function Cats() {
  const cats = await fetchCats({ limit: 20 });
  return <CatGrid cats={cats} />;
}
