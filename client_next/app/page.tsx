import { redirect } from "next/navigation";

export default function RootPage() {
  const isLoggedIn = true; // will check later

  if (isLoggedIn) {
    redirect("/main");
  }

  redirect("/auth/login");
}
