"use client";

import { useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Home,
    Search,
    Bell,
    User,
    Plus,
    Menu,
    X,
    Settings,
    LogOut,
} from "lucide-react";
import { Button } from "../ui/button";
import Themetoggle from "@/app/theme-toggle";

interface SidebarItemProps {
    icon: ReactNode;
    label: string;
    href: string;
    active: boolean;
}

export default function Sidebar(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false);
    const pathname = usePathname();

    return (
        <>
            <button onClick={() => setOpen(prev => !prev)} className="fixed top-4 left-4 z-50 md:hidden p-2 rounded-lg dark:bg-black" aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setOpen(false)}/>
            )}

            <aside className={`fixed md:static top-0 left-0 z-50 h-screen w-45 md:w-55 border-r border-black/5 shadow-lg flex flex-col justify-start items-center gap-4 px-2 py-8 font-serif text-[1.1rem] bg-white dark:bg-black transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <div className="flex w-full ml-3 mb-5 md:mb-0">
                    <div className="h-14 md:h-18 w-14 md:w-18 border border-black/10 rounded-full bg-gray-50 dark:bg-white/20"></div>
                    <div className="flex flex-col justify-center ml-3">
                        <p className="font-semibold text-[1.1rem]">Hello</p>
                        <p className="text-[0.9rem] font-light opacity-50">Random user</p>
                    </div>
                </div>
                <div className="w-full flex items-center gap-2 md:pl-5 my-2">
                    <Themetoggle/>
                    <p className="mt-1">Theme</p>
                </div>
                <SidebarItem icon={<Home className="h-5 md:h-7"/>} label="Home" href="/main" active={pathname === "/main"} />
                <SidebarItem icon={<Search className="h-5 md:h-7"/>} label="Explore" href="/main/explore" active={pathname === "/main/explore"} />
                <SidebarItem icon={<Plus className="h-5 md:h-7"/>} label="Create" href="/main/post" active={pathname === "/main/post"} />
                <SidebarItem icon={<Bell className="h-5 md:h-7"/>} label="Activity" href="/main/activity" active={pathname === "/main/activity"} />
                <SidebarItem icon={<User className="h-5 md:h-7"/>} label="Profile" href="/main/profile" active={pathname === "/main/profile"} />
                <SidebarItem icon={<Settings className="h-5 md:h-7"/>} label="Settings" href="/main/settings" active={pathname === "/main/settings"} />
                <p className="flex mr-auto pl-2 md:pl-7 gap-2 mt-auto transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/10 w-full h-10 rounded-lg items-center cursor-pointer dark:hover:text-white/70"><LogOut className="opacity-60"/>Log out</p>
            </aside>
        </>
    );
}

function SidebarItem({ icon, label, href, active }: SidebarItemProps): JSX.Element {
    return (
        <Link href={href} className={`flex gap-2 cursor-pointer transition-all duration-200 p-2 rounded-lg w-full md:pl-7 ${active ? "bg-blue-400 dark:bg-blue-500 text-white" : "hover:text-gray-600 hover:bg-blue-400/20 dark:hover:bg-blue-400/20 dark:hover:text-white/70"}`}>
            <span className={`h-4 md:h-6 ${active ? "text-white" : "text-black/50 dark:text-white/50"}`}>
                {icon}
            </span>
            {label}
        </Link>
    );
}
