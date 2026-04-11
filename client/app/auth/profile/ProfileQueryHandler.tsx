"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function ProfileQueryHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("register") === "google") {
      toast.success("Account created!");
      router.replace("/auth/profile");
    }
  }, [searchParams, router]);

  return null;
}