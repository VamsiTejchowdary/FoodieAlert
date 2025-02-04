import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Register() {
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   // If already logged in, redirect to the dashboard
  //   redirect("/dashboard");
  // }

  return <LoginForm />;
}
