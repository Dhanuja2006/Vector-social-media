"use client";

import { Suspense } from "react";
import PfpForm from "@/components/forms/ProfileForm";
import ProfileQueryHandler from "./ProfileQueryHandler";

export default function Profile() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Suspense fallback={null}>
        <ProfileQueryHandler />
      </Suspense>
      <PfpForm />
    </div>
  );
}