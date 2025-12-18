import UserProfile from "@/src/features/userProfile/components/b";
import { getCatsByUserId } from "@/src/server/repos/cats.repo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your curated list of favorite cats",
  description: "A comprehensive collection of all your favorite cats",
};

export default async function Page({ params }: { params: { userId: string } }) {
  const { userId } = await params;
  const cats = await getCatsByUserId(userId);

  return <UserProfile cats={cats} userId={userId} />;
}
