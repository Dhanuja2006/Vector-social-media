"use client";
import { Home, Search, Bell, User, Plus, TrendingUp, UserPlus, Compass, Lightbulb, Dumbbell, Activity, Trophy, Shuffle } from "lucide-react";
import { Button } from "../ui/button";
import { FaTableTennis } from "react-icons/fa";

export default function HomeSidebar() {
    return (
        <div className="hidden md:flex bg-white dark:bg-black border-black/5 w-90 h-screen flex-col py-7 px-3 font-serif">

            <p className="text-[1.1rem] font-semibold flex items-center gap-2"> <UserPlus className="h-5 text-blue-500" /> People you can follow</p>

            <div className="mt-5 flex flex-col gap-5 border-b pb-6">
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

            <div className="flex flex-col mt-5">
                <p className="flex gap-2 items-center font-semibold"><TrendingUp className="text-blue-500" /> Top posts this week</p>
                <div className="h-20 border mt-3 rounded-lg bg-black/5 dark:bg-white/5 dark:shadow-white dark:hover:shadow-xs cursor-pointer transition-all duration-300 hover:shadow-sm">

                </div>
                <div className="h-32 border my-3 rounded-lg bg-black/5 dark:bg-white/5 dark:shadow-white dark:hover:shadow-xs cursor-pointer transition-all duration-300 hover:shadow-sm">

                </div>
                <Button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white">See more</Button>
            </div>
        </div>
    );
}




/*
<p className="text-[1.1rem] mb-8 flex items-center gap-1"> <UserPlus className="h-5 text-blue-500"/> People you can follow</p>
                <div className="flex flex-col gap-4 text-gray-500">
                    <div className="flex items-center justify-between text-[0.95rem]">
                        <p>Ramu Kumar</p>
                        <Button className="h-7 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 dark:text-white">Follow</Button>
                    </div>
                    <div className="flex items-center justify-between text-[0.95rem]">
                        <p>Shyaam Kendrik</p>
                        <Button className="h-7 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 dark:text-white">Follow</Button>
                    </div>
                    <div className="flex items-center justify-between text-[0.95rem]">
                        <p>Justin Dukes</p>
                        <Button className="h-7 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 dark:text-white">Follow</Button>
                    </div>
                    <div className="flex items-center justify-between text-[0.95rem]">
                        <p>Pajeet henderson</p>
                        <Button className="h-7 rounded-full bg-blue-500 cursor-pointer hover:bg-blue-600 dark:text-white">Follow</Button>
                    </div>
                </div>
*/