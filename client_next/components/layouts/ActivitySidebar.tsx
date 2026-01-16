"use client";

import { Button } from "../ui/button";
import { Compass, Heart, Lightbulb, Medal, Search, Shuffle, TrendingUp, Trophy, UserPlus, X } from "lucide-react";
import { useState } from "react";

export default function ActivitySidebar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button onClick={() => setOpen(true)} className="fixed top-4 right-4 z-50 lg:hidden p-2 rounded-full bg-blue-500 text-white shadow-lg" aria-label="Open follow suggestions">
                <UserPlus />
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setOpen(false)} />
            )}

            <div className={`h-screen md:h-fit w-fit p-5 bg-white dark:bg-black fixed lg:static top-0 right-0 z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} lg:translate-x-0`}>
                <button onClick={() => setOpen(false)} className="absolute top-4 right-4 lg:hidden" aria-label="Close">
                    <X />
                </button>

                <p className="font-semibold ml-2 text-[1.1rem]">Search people you know</p>
                <div className="flex border h-10 rounded-full items-center px-3 bg-black/3 mt-7 mb-5">
                    <Search className="h-5"/>
                    <input type="text" placeholder="Search" className="outline-0 w-full h-full px-3"/>
                </div>

                <p className="text-[1.1rem] font-semibold flex items-center gap-2"> <UserPlus className="h-5 text-blue-500" /> Suggestions</p>

                <div className="mt-5 flex flex-col gap-6">
                    <div className="box flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <img src="/Jensen.png" alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col w-35">
                            <p className="text-[0.9rem]">Jensen Huang</p>
                            <p className="opacity-50 text-[0.8rem]">CEO and Founder, Nvidia</p>
                        </div>
                        <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                            Follow
                        </Button>
                    </div>

                    <div className="box flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <img src="/Mark.png" alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col w-35">
                            <p className="text-[0.9rem]">Mark Zuck</p>
                            <p className="opacity-50 text-[0.8rem]">CEO and Founder, Facebook</p>
                        </div>
                        <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                            Follow
                        </Button>
                    </div>

                    <div className="box flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <img src="/Elon.png" alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col w-35">
                            <p className="text-[0.9rem]">Elon Musk</p>
                            <p className="opacity-50 text-[0.8rem]">CEO and Founder, Tesla & SpaceX</p>
                        </div>
                        <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                            Follow
                        </Button>
                    </div>

                    <div className="box flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <img src="/Jensen.png" alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col w-35">
                            <p className="text-[0.9rem]">Jensen Huang</p>
                            <p className="opacity-50 text-[0.8rem]">CEO and Founder, Nvidia</p>
                        </div>
                        <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                            Follow
                        </Button>
                    </div>

                    <div className="box flex items-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-black/5 dark:bg-white/5 overflow-hidden">
                            <img src="/Mark.png" alt="" className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-col w-35">
                            <p className="text-[0.9rem]">Mark Zuck</p>
                            <p className="opacity-50 text-[0.8rem]">CEO and Founder, Facebook</p>
                        </div>
                        <Button className="h-8 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">
                            Follow
                        </Button>
                    </div>
                </div>

                <p className="text-gray-400 text-[0.8rem] text-center mt-10">All rights reserved @Vector 2026</p>
            </div>
        </>
    );
}
