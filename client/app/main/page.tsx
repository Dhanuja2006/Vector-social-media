"use client";

import Navbar from "@/components/Navbar";
import Feed from "@/components/feed/Feed";
import { Suspense } from "react";
import MainQueryHandler from "./MainQueryHandler";

export default function Home() {
  return (
    <div className="overflow-y-auto h-screen">
      <Navbar />
      <Suspense fallback={null}>
        <MainQueryHandler />
      </Suspense>
      <Feed />
    </div>
  );
}