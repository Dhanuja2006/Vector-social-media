"use client"

import Link from "next/link";

export default function CTA() {
    return (
        <div>
            <section id="pricing" className="py-24 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-5">
                        Start building
                        <span className="bg-blue-500 bg-clip-text text-transparent"> now!</span>
                    </h2>
                    <p className="text-neutral-500 text-base mb-8 max-w-md mx-auto">
                        Join thousands of professionals who landed their dream job with ResumeForge. Free to build, pay to download.
                    </p>
                    <Link href="/builder" className="btn-primary text-base py-3.5 px-8">
                        Create Resume — It&apos;s Free →
                    </Link>
                </div>
            </section>
        </div>
    );
}