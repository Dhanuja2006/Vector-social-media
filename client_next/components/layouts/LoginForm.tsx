"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="border border-black/10 dark:border-white/10 rounded-lg px-10 py-5">
            <p className="font-semibold text-[1rem] md:text-[1.2rem]">Welcome back!</p>
            <p className="mt-2 mb-5 text-[0.9rem] md:text-[1.1rem]">Log in to get right back in!</p>
            <p className="font-semibold">Username</p>
            <input type="text" placeholder="demousername09" className="outline-none h-10 bg-black/5 border dark:border-white/10 w-full rounded-md p-3 my-2"/>
            <p className="font-semibold">Password</p>

            <div className="relative">
                <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className="outline-none h-10 bg-black/5 border dark:border-white/10 w-full rounded-md p-3 my-2 pr-10"/>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-black/50" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </span>
            </div>

            <p className="text-[0.9rem] mt-1.5">Forgot your password? <span className="text-blue-800 underline cursor-pointer ml-5">Click here</span> </p>
            <Button className="w-full mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600">
                Log in
            </Button>
            <p className="text-[0.9rem] mt-3">Don't have an account? <span className="font-semibold ml-6 underline cursor-pointer" onClick={() => router.push('/auth/register')}>Register</span></p>
        </div>
    );
}
