"use client";

import { Heart, MessageCircle, Repeat } from "lucide-react";
import { useState } from "react";

export default function PostCard() {

  const [liked, setLiked] = useState(false);

  return (
    <div className="border border-black/10 dark:border-white/10 bg-white dark:bg-black cursor-pointer hover:shadow-md dark:shadow-white/5 px-5 py-3 hover:bg-gray-50 rounded-2xl transition">
      <div className="flex items-center gap-2 mb-1">
        <div className="h-8 md:h-10 w-8 md:w-10 rounded-full bg-gray-300" />
        <span className="font-semibold">username</span>
        <span className="text-[0.9rem] text-gray-500">@handle · 1h</span>
      </div>

      <p className="mt-2 mb-5 text-[0.9rem] md:text-[1rem]">
        This is a post. Eventually this will be real data.
      </p>

      <div className="flex justify-between text-gray-500">
        <p className="flex gap-1 items-center"><MessageCircle size={20} className="cursor-pointer hover:text-blue-500" />0</p>
        <p className="flex gap-1 items-center"><Repeat size={20} className="cursor-pointer hover:text-blue-500" />0</p>
        <p className="flex gap-1 items-center"><Heart size={20} className={`cursor-pointer transition-all ${liked ? "text-blue-500" : "hover:text-blue-500"}`} fill={liked ? "currentColor" : "none"} onClick={() => setLiked(prev => !prev)}/>0</p>
      </div>
    </div>
  );
}
