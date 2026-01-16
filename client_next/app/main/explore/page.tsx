"use client";

import ExploreSidebar from "@/components/layouts/ExploreSidebar";
import { Search } from "lucide-react";

export default function Explore() {
    return (
        <div className="flex">
            <div className="w-full py-5 px-7">
                <p className="text-[1.6rem] font-semibold text-center md:text-left">Explore</p>
                <p className="opacity-45 text-center md:text-left">Discover people, posts and ideas</p>
                <div className="flex items-center px-2 gap-2 mt-5 border border-black/10 bg-black/5 dark:bg-white/5 rounded-full h-10">
                    <Search className="h-5"/>
                    <input type="text" placeholder="Search" className="outline-0 w-full h-full"/>
                </div>
            </div>
            <ExploreSidebar/>
        </div>
    );
}