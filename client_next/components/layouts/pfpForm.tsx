"use client";

import { Button } from "@/components/ui/button";
import { Camera, Plus, X } from "lucide-react";
import { useRef, useState } from "react";

export default function PfpForm() {
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            return;
        }
        const url = URL.createObjectURL(file);
        setPreview(url);
    };

    const handleRemove = () => {
        setPreview(null);
        if (fileRef.current) {
            fileRef.current.value = "";
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mx-auto border border-black/10 rounded-2xl w-[90vw] md:w-[40vw] p-10">
            <p className="font-bold text-center text-[1.8rem] text-neutral-600">Set up your profile</p>

            <div className="relative">
                <div onClick={() => fileRef.current?.click()} className="h-45 w-45 group flex items-center justify-center border border-black/10 rounded-full mx-auto mt-10 outline-2 outline-neutral-200 bg-white/10 transition-all duration-200 hover:outline-4 cursor-pointer overflow-hidden">
                    {preview ? (
                        <img src={preview} alt="pfp preview" className="h-full w-full object-cover rounded-full" />
                    ) : (
                        <Plus strokeWidth={0.7} className="h-14 w-14 opacity-50 transition-all duration-200 group-hover:scale-110" />
                    )}
                </div>

                {preview && (
                    <div onClick={handleRemove} className="absolute top-14 right-5 h-9 w-9 flex items-center justify-center rounded-full cursor-pointer hover:bg-neutral-100">
                        <X strokeWidth={1.2} className="h-5 w-5 opacity-70" />
                    </div>
                )}

                <div className="absolute flex items-center justify-center h-14 w-14 border bg-white shadow-xl rounded-full bottom-0 right-0">
                    <Camera className="h-7.5 w-7.5 opacity-50"/>
                </div>
            </div>

            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange}/>

            <Button className="mt-10 w-50 h-10 cursor-pointer rounded-full bg-blue-500 hover:bg-blue-600" onClick={() => fileRef.current?.click()}>
                Upload picture
            </Button>

            <div className="w-full mt-5">
                <p className="text-[1.2rem] font-semibold text-left">Set a username</p>
                <div className="my-3 border border-black/10 flex items-center px-3 h-10 rounded-lg gap-2">
                    <p>@</p>
                    <input type="text" placeholder="demouser09" className="h-full w-full outline-none"/>
                </div>
                <Button className="h-10 mt-2 w-full cursor-pointer">
                    Continue
                </Button>
            </div>
        </div>
    );
}
