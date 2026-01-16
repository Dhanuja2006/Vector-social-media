"use client";

import ActivitySidebar from "@/components/layouts/ActivitySidebar";
import { Search } from "lucide-react";

export default function Activity() {
    return (
        <div className="flex">
            <div className="w-full h-screen py-5 px-7">
                <p className="text-[1.4rem] font-semibold text-center md:text-left">Notifications Panel</p>
                <div className="flex items-center px-2 gap-2 mt-5 border bg-black/3 rounded-full h-10">
                    <Search className="h-5"/>
                    <input type="text" placeholder="Search notifications" className="outline-0 w-full h-full"/>
                </div>
                <div className="w-full my-5 h-[75vh] flex items-center justify-center">
                    <p className="text-gray-600">No new notifications!</p>
                </div>
            </div>
            <ActivitySidebar/>
        </div>
    );
}