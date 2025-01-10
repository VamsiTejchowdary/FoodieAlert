import LoginForm from "@/components/LoginForm";
import LandingPage from "@/components/landingpage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");

  return (
    <main>
      <LandingPage />
    </main>
  );
}
