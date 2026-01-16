import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import Feed from "@/components/feed/Feed";
import Themetoggle from "@/app/theme-toggle";
import HomeSidebar from "@/components/layouts/HomeSidebar";

export default function home() {
  return (
    <div className=" dark:bg-linear-to-b dark:from-white/2 dark:via-white/5 dark:to-white/2">
      <Navbar/>
      <div className="flex">
        <Feed/>
        <HomeSidebar/>
      </div>
    </div>
  );
}
