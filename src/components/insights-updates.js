import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function InsightsUpdates() {
    const categories = [
        { idx: "01", title: "Latest Product Launches" },
        { idx: "02", title: "Company Announcements" },
        { idx: "03", title: "Research & Insights" },
        { idx: "04", title: "Behind-the-Scenes Stories" },
    ]

    return (
        <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>INSIGHTS &amp; UPDATES</span>

            <div className='grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start'>
                <div>
                    <span className='md:text-4xl text-xl font-bold block'>
                        Stories From <span className='text-secondary'>Our Journey</span>
                    </span>
                    <p className='text-zinc-400 md:text-base text-sm leading-loose mt-6 mb-8 max-w-[40ch]'>
                        Explore product updates, company news, industry observations, and lessons
                        learned while building products that matter.
                    </p>

                    <Link
                        href='/blogs'
                        className='bg-secondary sliding-animation inline-flex justify-between items-center gap-4 md:pl-4 md:pr-6 md:py-2 py-1 px-2 rounded-full font-semibold red-shadow w-fit'
                    >
                        <span className='md:text-md text-sm'>Visit Our Blog</span>
                        <div className='bg-secondary p-1 rounded-full'><ArrowRight /></div>
                    </Link>
                </div>

                <div className='flex flex-col'>
                    {categories.map((c, i) => (
                        <Link
                            href='/blogs'
                            key={c.idx}
                            className={`group flex items-center gap-6 py-6 px-1 border-t border-[#1A1A1A] transition-all duration-300 hover:bg-[rgba(199,10,14,0.05)] hover:pl-4 ${i === categories.length - 1 ? 'border-b' : ''}`}
                        >
                            <span className='font-extrabold text-white/25 text-lg min-w-[2.4rem] transition-colors duration-300 group-hover:text-secondary'>
                                {c.idx}
                            </span>
                            <span className='font-bold md:text-lg text-base flex-1'>{c.title}</span>
                            <span className='text-secondary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0'>
                                <ArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default InsightsUpdates
