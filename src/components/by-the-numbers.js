import React from 'react'

function ByTheNumbers() {
    const stats = [
        { value: "10+", label: "Products", sub: "Created" },
        { value: "100K+", label: "Users", sub: "Reached" },
        { value: "5M+", label: "Interactions", sub: "Enabled" },
        { value: "20+", label: "Markets", sub: "Served" },
    ]

    return (
        <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>BY THE NUMBERS</span>
            <span className='md:text-4xl text-xl font-bold'>
                Growing Through <span className='text-secondary'>Purpose</span>
            </span>

            <div className='grid grid-cols-2 lg:grid-cols-4 border-t border-l border-[#1A1A1A] mt-2'>
                {stats.map((s) => (
                    <div
                        key={s.label}
                        className='border-r border-b border-[#1A1A1A] p-6 md:p-9 transition-colors duration-300 hover:bg-[rgba(199,10,14,0.04)]'
                    >
                        <div className='number-bg md:text-6xl text-5xl font-black leading-none'>{s.value}</div>
                        <div className='w-[30px] h-[3px] bg-secondary rounded my-3 shadow-[0_0_10px_rgba(199,10,14,0.6)]' />
                        <div className='font-bold text-sm md:text-base'>
                            {s.label}
                            <span className='block text-zinc-400 font-medium text-xs md:text-sm mt-0.5'>{s.sub}</span>
                        </div>
                    </div>
                ))}
            </div>

            <span className='text-[#52525b] text-xs italic'>
                Replace these figures with actual company metrics as your ecosystem grows.
            </span>
        </section>
    )
}

export default ByTheNumbers
