import React from 'react'

function DiscoverBuildImpact() {
    const stages = [
        {
            step: "01",
            title: "Discover",
            lead: "Every meaningful journey begins with discovery.",
            description:
                "Our products help people uncover opportunities, gain knowledge, understand markets, and identify the next best step. Whether exploring ideas, information, or possibilities, we make discovery easier.",
            node: "bg-black border-2 border-dashed border-[#C70A0E]/45 text-gray-500",
            tick: "opacity-40",
        },
        {
            step: "02",
            title: "Build",
            lead: "Ideas become valuable only when put into action.",
            description:
                "We build products that empower users to create, learn, invest, grow, and improve. Through thoughtful design and practical functionality, we help people turn intentions into results.",
            node: "bg-black border-2 border-[#C70A0E]/70 text-white shadow-[0_0_0_4px_rgba(199,10,14,0.08)]",
            tick: "opacity-70",
        },
        {
            step: "03",
            title: "Impact",
            lead: "The true measure of a product is the outcome it creates.",
            description:
                "We focus on solutions that generate lasting value for individuals, communities, and businesses. Every product we launch is designed to create measurable, meaningful impact.",
            node: "bg-secondary border-2 border-secondary text-white shadow-[0_0_24px_2px_rgba(199,10,14,0.65)]",
            tick: "opacity-100 shadow-[0_0_10px_#C70A0E]",
        },
    ]

    return (
        <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>OUR PHILOSOPHY</span>
            <span className='md:text-4xl text-xl font-bold'>
                Discover. Build. <span className='text-secondary'>Impact.</span>
            </span>
            <span className='text-xs md:text-sm text-zinc-400 max-w-[46ch]'>
                Three movements turn a spark of insight into outcomes people can feel.
                The further right you travel, the brighter the impact.
            </span>

            <div className='relative mt-8'>
                {/* intensifying rail (desktop only) */}
                <div className='spine-rail hidden lg:block top-19' />

                <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-0 gap-10'>
                    {stages.map((s) => (
                        <div key={s.step} className='relative lg:px-6'>
                            <span className='absolute -top-6 right-2 text-7xl font-black text-white/[0.03] tracking-tighter pointer-events-none select-none'>
                                {s.step}
                            </span>

                            <div className={`relative z-[2] w-[54px] h-[54px] rounded-full flex items-center justify-center font-bold ${s.node}`}>
                                {s.step}
                            </div>

                            <h3 className='text-2xl font-extrabold mt-6 mb-2'>{s.title}</h3>
                            <p className='text-zinc-200 font-semibold mb-3'>{s.lead}</p>
                            <p className='text-zinc-400 text-sm leading-relaxed'>{s.description}</p>
                            <div className={`w-9 h-[3px] rounded bg-secondary mt-5 ${s.tick}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DiscoverBuildImpact
