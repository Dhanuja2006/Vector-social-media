import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Sidebar from "@/components/layouts/Sidebar";
import Feed from "@/components/feed/Feed";
import Themetoggle from "@/app/theme-toggle";
import HomeSidebar from "@/components/layouts/HomeSidebar";

export default function home() {
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Feed/>
        <HomeSidebar/>
      </div>
    </div>
  );
}
