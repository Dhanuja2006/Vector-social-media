"use client"

const steps = [
    {
        step: "01",
        title: "Enter your information",
        description: "Fill in your personal details, education, experience, and projects using our clean form editor.",
    },
    {
        step: "02",
        title: "Watch it build live",
        description: "Your resume renders instantly as you type. Adjust, refine, and perfect it in real time.",
    },
    {
        step: "03",
        title: "Download your resume",
        description: "Unlock your resume with a one-time payment and download a professional PDF instantly.",
    },
];

export default function Working() {
    return (
        <div>
            <section id="how-it-works" className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-14">
                        <p className="text-xs font-semibold text-blue-500 tracking-widest uppercase mb-3">How it works</p>
                        <h2 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">
                            Three steps to your dream job
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connector line */}
                        <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />

                        {steps.map((s, i) => (
                            <div key={i} className="relative text-center">
                                <div className="w-16 h-16 rounded-xl bg-blue-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                                    <span className="font-bold text-white text-xs tracking-widest">{s.step}</span>
                                </div>
                                <h3 className="text-[1.2rem] font-bold text-neutral-800 mb-2">{s.title}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">{s.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}