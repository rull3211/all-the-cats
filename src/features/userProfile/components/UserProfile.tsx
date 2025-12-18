import MyCats from "./MyCats";
import type { Cat } from "@/src/features/cats/types/Cat";

export default async function UserProfile({
  cats,
  userId,
}: {
  cats: Cat[];
  userId: string;
}) {
  return (
    <main style={{ padding: 20, fontFamily: "system-ui, sans-serif" }}>
      <h1>User profile: {userId}</h1>

      {cats.length === 0 ? (
        <p>No cats found for this user.</p>
      ) : (
        <MyCats cats={cats} />
      )}
    </main>
  );
}
