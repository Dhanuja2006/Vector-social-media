"use client"

import { demoResumeData } from "@/utils/demoData";
import { ResumeTemplate } from "../resume/ResumeTemplate";
import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <section className="relative md:h-screen pt-20 md:pt-0 flex items-center px-6 overflow-hidden">

                <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">

                    {/* LEFT */}
                    <div className="md:px-10 text-center md:text-left w-full md:w-[50%]">

                        {/* TOP BADGE */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-500 text-xs font-medium mb-6 animate-fade-in-up stagger-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Build · Analyze · Improve
                        </div>

                        {/* HEADLINE */}
                        <h1 className="text-4xl md:text-[3rem] font-bold text-neutral-900 leading-[1.1] tracking-tight mb-5 animate-fade-in-up stagger-2">
                            Build and analyze {" "}
                            <span className="bg-blue-500 bg-clip-text text-transparent">
                                resumes in seconds
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-lg text-neutral-500 leading-relaxed mb-6 animate-fade-in-up stagger-3">
                            Create clean, ATS-friendly resumes and instantly analyze them
                            against job descriptions to uncover missing skills, weak points,
                            and improvement opportunities.
                        </p>

                        <div className="flex flex-col justify-center md:justify-start sm:flex-row gap-3 animate-fade-in-up stagger-4">

                            <Link href="/builder" className="btn-primary text-sm flex justify-center py-3 px-6">
                                Create Resume →
                            </Link>

                            <Link href="/resume-analyzer" className="btn-secondary text-sm flex justify-center py-3 px-6">
                                Analyze Resume →
                            </Link>

                        </div>

                        {/* SOCIAL PROOF */}
                        <div className="flex items-center gap-4 mt-8 animate-fade-in-up stagger-5">
                            <div className="flex -space-x-2">
                                {["bg-blue-200", "bg-blue-200", "bg-blue-200", "bg-blue-200"].map((c, i) => (
                                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
                                ))}
                            </div>
                            <p className="text-xs text-neutral-500">
                                <span className="font-semibold text-neutral-700">200+</span> resumes built this month
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative my-auto animate-fade-in-up w-full md:w-[50%] pb-10 md:pb-0">

                        <div className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-card">

                            {/* FAKE BROWSER BAR */}
                            <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-300/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-300/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-300/70" />
                                </div>
                                <div className="mx-auto flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-400">
                                    <span>🔒</span> vector.app/builder
                                </div>
                            </div>

                            {/* SPLIT PREVIEW */}
                            <div className="grid grid-cols-5 h-64 md:h-80">

                                {/* LEFT FORM */}
                                <div className="col-span-2 border-r border-neutral-100 p-4 overflow-hidden bg-neutral-50/50">
                                    <div className="space-y-2">
                                        <div className="h-2 bg-neutral-200 rounded-full w-24" />
                                        {[100, 80, 90, 70].map((w, i) => (
                                            <div
                                                key={i}
                                                className="h-8 bg-white rounded-lg border border-neutral-100 shadow-sm"
                                                style={{ width: `${w}%` }}
                                            />
                                        ))}
                                        <div className="h-2 bg-neutral-200 rounded-full w-20 mt-3" />
                                        {[100, 60].map((w, i) => (
                                            <div
                                                key={i}
                                                className="h-8 bg-white rounded-lg border border-neutral-100 shadow-sm"
                                                style={{ width: `${w}%` }}
                                            />
                                        ))}
                                        <div className="h-16 bg-white rounded-lg border border-neutral-100 shadow-sm w-full" />
                                    </div>
                                </div>

                                {/* RIGHT RESUME */}
                                <div className="col-span-3 p-4 overflow-hidden">
                                    <div
                                        className="scale-[0.45] origin-top-left"
                                        style={{ width: "222%", transformOrigin: "top left" }}
                                    >
                                        <ResumeTemplate data={demoResumeData} />
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}