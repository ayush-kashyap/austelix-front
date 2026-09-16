import React from 'react'
import Image from 'next/image'

function WhyWeExist() {
    return (
        <section className='relative overflow-hidden glow-radial-right xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>WHY WE EXIST</span>

            <div className='relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center mt-2'>
                <div>
                    <h2 className='md:text-5xl text-3xl font-extrabold leading-tight tracking-tight'>
                        Technology should <span className='text-secondary'>simplify</span> life, not complicate it.
                    </h2>

                    <p className='text-zinc-400 md:text-base text-sm leading-loose mt-6 max-w-[48ch]'>
                        Too many products are built around trends rather than real needs. We believe
                        great products begin with understanding people, identifying genuine challenges,
                        and creating solutions that deliver lasting value.
                    </p>

                    <p className='border-l-[3px] border-secondary pl-5 mt-8 font-bold md:text-lg text-base leading-snug'>
                        Our mission is to build products that people{' '}
                        <span className='text-secondary'>trust, rely on, and return to</span> every day.
                    </p>
                </div>

                <div className='relative flex items-center justify-center min-h-[200px]'>
                    <Image
                        src='/austelix-transparent.png'
                        width={400}
                        height={400}
                        alt='Austelix'
                        className='w-[min(78%,320px)] h-auto opacity-90 drop-shadow-[0_0_40px_rgba(199,10,14,0.35)]'
                    />
                </div>
            </div>
        </section>
    )
}

export default WhyWeExist
