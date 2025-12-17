import { Cat } from "@/src/features/cats/index";
import "server-only";

type FetchCatsParams = {
  limit?: number;
};

export async function fetchCats({ limit = 8 }: FetchCatsParams = {}): Promise<
  Cat[]
> {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}`,
    {
      cache: "no-store", // ISR caching in Next.js
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cats");
  }
  const CatImages: any[] = await res.json();
  return CatImages.map((catData: any) => ({
    id: catData.id,
    url: catData.url,
  }));
}
