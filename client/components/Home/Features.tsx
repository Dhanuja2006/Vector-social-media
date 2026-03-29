"use client"

import { Download, LucideIcon, Puzzle, Target, Zap } from "lucide-react";

type Feature = {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
    border: string;
    iconBg: string;
};

const features: Feature[] = [
    {
        icon: Zap,
        title: "Live Resume Preview",
        description: "See your resume update in real time as you type. No more guess-and-check.",
        color: "from-amber-50 to-orange-50",
        border: "border-amber-100",
        iconBg: "bg-amber-100",
    },
    {
        icon: Target,
        title: "ATS Optimized",
        description: "Templates designed to pass Applicant Tracking Systems at top companies.",
        color: "from-emerald-50 to-teal-50",
        border: "border-emerald-100",
        iconBg: "bg-emerald-100",
    },
    {
        icon: Puzzle,
        title: "Section Builder",
        description: "Drag, add, and reorder sections with our intuitive visual editor.",
        color: "from-indigo-50 to-indigo-50",
        border: "border-indigo-100",
        iconBg: "bg-indigo-100",
    },
    {
        icon: Download,
        title: "Instant PDF Download",
        description: "Export a pixel-perfect PDF ready to send to any recruiter.",
        color: "from-violet-50 to-purple-50",
        border: "border-violet-100",
        iconBg: "bg-violet-100",
    },
];

export default function Features() {
    return (
        <div>
            <section id="features" className="py-24 px-6 bg-blue-500">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-14">
                        <p className="text-xs font-semibold text-gray-200 tracking-widest uppercase mb-3">Features</p>
                        <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                            Everything you need to get hired
                        </h2>
                        <p className="text-gray-300 text-base">
                            Built for modern job seekers who want results, not complexity.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {features.map((f) => {
                            const Icon = f.icon;

                            return (
                                <div
                                    key={f.title}
                                    className={`group rounded-2xl p-6 cursor-pointer bg-white transition-all duration-300`}
                                    style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)" }}
                                >
                                    <div className={`w-10 h-10 group-hover:scale-[1.2] transition-all duration-200 rounded-md bg-blue-500 flex items-center justify-center mb-4`}>
                                        <Icon size={20} className="text-white" />
                                    </div>

                                    <h3 className="font-bold text-blue-600 mb-2 transition-all duration-200 group-hover:text-[1.1rem] group-hover:text-blue-500">{f.title}</h3>
                                    <p className="text-sm text-neutral-500 leading-relaxed">{f.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}