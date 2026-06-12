import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function FinalCta() {
    return (
        <section className='relative overflow-hidden text-center glow-radial-center cta-tick xl:px-32 lg:px-24 md:px-32 px-6 md:py-20 py-14'>
            <div className='relative z-[2] flex flex-col items-center gap-6'>
                <span className='text-secondary font-bold tracking-[0.2em] text-sm uppercase'>Let's Build</span>

                <h2 className='md:text-5xl text-3xl font-extrabold leading-tight tracking-tight max-w-[18ch] bg-gradient-to-b from-white/85 to-(--secondary-color) bg-clip-text text-transparent'>
                    Ready to Explore What We're Building?
                </h2>

                <p className='text-zinc-400 md:text-base text-sm leading-relaxed max-w-[52ch]'>
                    Discover products designed to solve problems, unlock opportunities, and create meaningful impact.
                </p>

                <div className='flex gap-4 flex-col sm:flex-row mt-2'>
                    <Link
                        href='/'
                        className='bg-secondary sliding-animation flex justify-between items-center gap-4 md:pl-4 md:pr-6 md:py-2 py-1 px-2 rounded-full font-semibold red-shadow'
                    >
                        <span className='md:text-md text-sm'>Explore Products</span>
                        <div className='bg-secondary p-1 rounded-full'><ArrowRight /></div>
                    </Link>
                    <Link
                        href='/contact-us'
                        className='border border-(--secondary-color) sliding-animation flex justify-between items-center gap-4 md:pl-4 md:pr-6 md:py-2 py-1 px-2 rounded-full font-semibold'
                    >
                        <span className='md:text-md text-sm'>Contact Us</span>
                        <div className='bg-secondary p-1 rounded-full'><ArrowRight /></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FinalCta
