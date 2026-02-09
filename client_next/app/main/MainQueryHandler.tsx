"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function MainQueryHandler() {
  const searchParams = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (searchParams.get("login") === "google") {
      toast.success("Logged in successfully!");
      router.replace("/main");
    }
  }, [searchParams, router]);

  return null;
}