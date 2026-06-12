import React from 'react'
import Image from 'next/image'

function AboutUsSection() {
    return (
        <section className='relative xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>ABOUT US</span>
            <span className='md:text-4xl text-xl font-bold'>
                Building Products <span className='text-secondary'>With Purpose</span>
            </span>

            <div className='bracket-frame relative overflow-hidden rounded-[22px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/[0.06] to-[#0A0A0A]/40 md:p-14 p-7 mt-2'>
                <Image
                    src='/austelix-transparent.png'
                    width={330}
                    height={330}
                    alt=''
                    aria-hidden='true'
                    className='absolute -right-[3%] -bottom-[18%] w-[42%] max-w-[330px] h-auto opacity-[0.05] pointer-events-none'
                />

                <div className='relative z-[2] grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10'>
                    <p className='text-zinc-300 md:text-base text-sm leading-loose'>
                        We are a <strong className='text-white font-bold'>product-focused company</strong> committed
                        to creating solutions that help people discover opportunities, build meaningful
                        outcomes, and create lasting impact.
                    </p>
                    <p className='text-zinc-300 md:text-base text-sm leading-loose'>
                        Our approach combines <strong className='text-white font-bold'>thoughtful strategy,
                        practical innovation,</strong> and a deep commitment to solving real-world problems.
                    </p>
                    <p className='text-zinc-300 md:text-base text-sm leading-loose'>
                        As our ecosystem grows, our purpose remains unchanged:{' '}
                        <strong className='text-white font-bold'>build products that make a difference.</strong>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection
