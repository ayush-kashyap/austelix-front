import React from 'react'
import { Users, Sparkles, Target, RefreshCw } from 'lucide-react'

function WhatGuidesUs() {
    const principles = [
        {
            idx: "01",
            title: "User First",
            description: "Every decision begins with the needs of the people we serve.",
            icon: Users,
        },
        {
            idx: "02",
            title: "Simplicity Matters",
            description: "The best products solve complex problems with simple experiences.",
            icon: Sparkles,
        },
        {
            idx: "03",
            title: "Long-Term Thinking",
            description: "We build for sustainability, not short-term attention.",
            icon: Target,
        },
        {
            idx: "04",
            title: "Continuous Improvement",
            description: "Every product can become better through learning and iteration.",
            icon: RefreshCw,
        },
    ]

    return (
        <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>WHAT GUIDES US</span>
            <span className='md:text-4xl text-xl font-bold'>
                Principles That <span className='text-secondary'>Shape Our Work</span>
            </span>

            <div className='relative grid md:grid-cols-2 grid-cols-1 gap-px bg-[#1A1A1A] border border-[#1A1A1A] rounded-[18px] overflow-hidden mt-2'>
                {/* center crosshair node (desktop) */}
                <div className='hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[3] w-[42px] h-[42px] rounded-full bg-black border-2 border-secondary items-center justify-center shadow-[0_0_22px_rgba(199,10,14,0.55)]'>
                    <div className='w-3 h-[2px] bg-secondary absolute' />
                    <div className='h-3 w-[2px] bg-secondary absolute' />
                </div>

                {principles.map((p) => {
                    const Icon = p.icon
                    return (
                        <div
                            key={p.idx}
                            className='relative bg-[#0A0A0A] p-8 md:p-9 transition-colors duration-300 hover:bg-[#0d0d0d]'
                        >
                            <span className='absolute top-5 right-6 text-xs font-extrabold tracking-widest text-[#C70A0E]/60'>
                                {p.idx}
                            </span>
                            <div className='w-[46px] h-[46px] rounded-xl border border-[#C70A0E]/40 bg-[#C70A0E]/10 flex items-center justify-center text-secondary mb-5'>
                                <Icon size={22} strokeWidth={1.6} />
                            </div>
                            <h4 className='text-lg font-extrabold mb-2'>{p.title}</h4>
                            <p className='text-zinc-400 text-sm leading-relaxed'>{p.description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhatGuidesUs
