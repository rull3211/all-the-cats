import UserProfile from "@/features/userProfile/components/userProfile";
import { getCatsByUserId } from "@/server/repos/cats.repo";

export default async function Page({ params }: { params: { userId: string } }) {
  const { userId } = await params;
  const cats = await getCatsByUserId(userId);

  return <UserProfile cats={cats} userId={userId} />;
}
