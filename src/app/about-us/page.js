import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Target, Eye, Check } from 'lucide-react'

export const metadata = {
    title: 'About Us — Austelix',
    description: 'Building products around real problems. Discover. Build. Impact.',
}

const approach = [
    {
        step: '01',
        title: 'Discover',
        em: 'We begin by understanding.',
        paras: [
            'Research is at the core of everything we do. We continuously explore industries, emerging trends, market gaps, and user experiences to identify challenges that are often overlooked or underserved.',
            'Rather than chasing ideas, we focus on discovering problems worth solving.',
        ],
        node: 'bg-black border-2 border-dashed border-[#C70A0E]/45 text-gray-500',
    },
    {
        step: '02',
        title: 'Build',
        em: 'Once a challenge is validated, we create solutions that are practical, intuitive, and scalable.',
        paras: [
            'Our process combines research, experimentation, design, and technology to transform insights into products that people can rely on.',
            'Every feature, workflow, and decision is guided by the needs of the users we serve.',
        ],
        node: 'bg-black border-2 border-[#C70A0E]/70 text-white shadow-[0_0_0_4px_rgba(199,10,14,0.08)]',
    },
    {
        step: '03',
        title: 'Impact',
        em: 'A successful product is defined by the value it creates.',
        paras: [
            'We measure success through the outcomes our products help achieve — whether that means saving time, improving productivity, simplifying decisions, or creating new opportunities.',
            'Our goal is not simply to launch products. Our goal is to create meaningful impact through them.',
        ],
        node: 'bg-secondary border-2 border-secondary text-white shadow-[0_0_24px_2px_rgba(199,10,14,0.6)]',
    },
]

const beliefs = [
    { i: '01', t: 'Problems Deserve Understanding', d: 'The strongest solutions come from a deep understanding of the problem, not from assumptions.' },
    { i: '02', t: 'Simplicity Creates Adoption', d: 'Technology should reduce complexity, not add to it. We create products that are easy to understand and easy to use.' },
    { i: '03', t: 'Value Comes Before Growth', d: 'Growth is a result of creating genuine value. We prioritize usefulness over trends and long-term trust over short-term gains.' },
    { i: '04', t: 'Continuous Improvement Matters', d: 'Every product can become better. We listen, learn, iterate, and improve continuously.' },
]

const questions = [
    'Is this solving a real problem?',
    'Does the solution create meaningful value?',
    'Can it improve the lives or work of the people who use it?',
    'Will it remain useful over time?',
]

function AboutUs() {
    return (
        <div>
            <Header active={'about'} />

            {/* ===== HERO ===== */}
            <section className='relative overflow-hidden about-hero-glow xl:px-32 lg:px-24 md:px-32 px-6 md:py-20 py-12'>
                <div className='relative grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-12 items-center'>
                    <div>
                        <span className='text-secondary md:text-xl text-lg font-bold'>ABOUT US</span>
                        <h1 className='md:text-6xl text-3xl font-extrabold leading-[1.08] tracking-tight mt-4'>
                            Building Products Around <span className='text-secondary'>Real Problems</span>
                        </h1>
                        <div className='w-[54px] h-1 bg-secondary rounded my-7 shadow-[0_0_14px_rgba(199,10,14,0.7)]' />
                        <p className='text-zinc-300 md:text-base text-sm leading-[1.85] mb-4 max-w-[60ch]'>
                            We are a <strong className='text-white font-bold'>product company</strong> focused on identifying
                            meaningful challenges and creating solutions that make a measurable difference.
                        </p>
                        <p className='text-zinc-300 md:text-base text-sm leading-[1.85] mb-4 max-w-[60ch]'>
                            Our journey begins long before a product is launched. Great products are not created from
                            assumptions — they emerge from understanding people, studying their challenges, and finding
                            better ways to help them move forward.
                        </p>
                        <p className='text-zinc-300 md:text-base text-sm leading-[1.85] max-w-[60ch]'>
                            Every product within our ecosystem is built on a simple principle:{' '}
                            <strong className='text-white font-bold'>solve a real problem and create lasting value.</strong>
                        </p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src='/austelix-transparent.png' width={400} height={400} alt='Austelix'
                            className='w-[min(72%,300px)] h-auto opacity-90 drop-shadow-[0_0_45px_rgba(199,10,14,0.4)]' />
                    </div>
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10'>
                <span className='text-secondary md:text-xl text-lg font-bold'>PURPOSE</span>
                <h2 className='md:text-4xl text-2xl font-extrabold mt-3'>Mission <span className='text-secondary'>&amp;</span> Vision</h2>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8'>
                    <div className='relative overflow-hidden rounded-[20px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/10 to-[#0A0A0A]/40 p-8 md:p-9'>
                        <div className='absolute top-0 left-0 h-1 w-16 bg-secondary shadow-[0_0_12px_rgba(199,10,14,0.6)]' />
                        <div className='w-12 h-12 rounded-[13px] border border-[#C70A0E]/40 bg-[#C70A0E]/10 flex items-center justify-center text-secondary mt-2 mb-5'>
                            <Target size={24} strokeWidth={1.6} />
                        </div>
                        <div className='text-secondary text-xs font-bold tracking-[0.16em] uppercase'>Our Mission</div>
                        <h3 className='text-2xl font-extrabold mt-1 mb-2'>Discover, build, create impact.</h3>
                        <p className='text-zinc-400 text-sm md:text-[0.95rem] leading-[1.8]'>
                            To discover meaningful challenges, build practical solutions, and create positive impact through
                            products that improve everyday experiences.
                        </p>
                        <p className='text-zinc-400 text-sm md:text-[0.95rem] leading-[1.8] mt-3'>
                            We aim to develop products that help individuals and organizations make better decisions, work
                            more effectively, and achieve their goals with confidence.
                        </p>
                    </div>

                    <div className='relative overflow-hidden rounded-[20px] border border-[#1A1A1A] bg-[#0A0A0A] p-8 md:p-9'>
                        <div className='absolute top-0 left-0 h-1 w-16 bg-secondary shadow-[0_0_12px_rgba(199,10,14,0.6)]' />
                        <div className='w-12 h-12 rounded-[13px] border border-[#C70A0E]/40 bg-[#C70A0E]/10 flex items-center justify-center text-secondary mt-2 mb-5'>
                            <Eye size={24} strokeWidth={1.6} />
                        </div>
                        <div className='text-secondary text-xs font-bold tracking-[0.16em] uppercase'>Our Vision</div>
                        <h3 className='text-2xl font-extrabold mt-1 mb-2'>An ecosystem of trusted products.</h3>
                        <p className='text-zinc-400 text-sm md:text-[0.95rem] leading-[1.8]'>
                            To build an ecosystem of trusted products that empower people to overcome challenges, unlock
                            opportunities, and create better outcomes in their personal and professional lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== OUR APPROACH (vertical spine) ===== */}
            <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10'>
                <span className='text-secondary md:text-xl text-lg font-bold'>OUR APPROACH</span>
                <h2 className='md:text-4xl text-2xl font-extrabold mt-3'>From Insight to <span className='text-secondary'>Outcome</span></h2>

                <div className='relative mt-10 pl-[3.6rem] md:pl-20'>
                    <div className='about-vrail' />
                    {approach.map((s) => (
                        <div key={s.step} className='relative pb-12 last:pb-0'>
                            <div className={`absolute -left-[3.6rem] md:-left-20 top-0 w-[54px] h-[54px] rounded-full flex items-center justify-center font-bold z-[2] ${s.node}`}>
                                {s.step}
                            </div>
                            <h3 className='text-2xl font-extrabold mb-3'>{s.title}</h3>
                            <span className='block text-zinc-200 font-semibold mb-2'>{s.em}</span>
                            {s.paras.map((p, i) => (
                                <p key={i} className='text-zinc-400 text-sm md:text-[0.95rem] leading-[1.8] mb-2 max-w-[60ch]'>{p}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== WHAT WE BELIEVE ===== */}
            <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10'>
                <span className='text-secondary md:text-xl text-lg font-bold'>WHAT WE BELIEVE</span>
                <h2 className='md:text-4xl text-2xl font-extrabold mt-3'>Principles We <span className='text-secondary'>Stand By</span></h2>

                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-14 border-t border-[#1A1A1A] mt-8'>
                    {beliefs.map((b) => (
                        <div key={b.i} className='flex gap-6 py-8 border-b border-[#1A1A1A]'>
                            <span className='text-[1.6rem] font-black text-[#C70A0E]/50 leading-none min-w-[2.6rem]'>{b.i}</span>
                            <div>
                                <h4 className='text-lg font-extrabold mb-2'>{b.t}</h4>
                                <p className='text-zinc-400 text-sm leading-relaxed'>{b.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ===== PRODUCT PHILOSOPHY (decision gate) ===== */}
            <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10'>
                <span className='text-secondary md:text-xl text-lg font-bold'>OUR PRODUCT PHILOSOPHY</span>
                <div className='grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start mt-3'>
                    <div>
                        <h2 className='md:text-4xl text-2xl font-extrabold mb-6'>Products are <span className='text-secondary'>long-term commitments.</span></h2>
                        <p className='text-white font-bold text-lg leading-snug mb-4'>
                            We view products as long-term commitments rather than short-term projects.
                        </p>
                        <p className='text-zinc-400 md:text-base text-sm leading-[1.85] max-w-[42ch]'>
                            Before building anything, we ask a set of questions. Only when the answer is clear do we move forward.
                        </p>
                    </div>

                    <div className='about-gate relative overflow-hidden rounded-[20px] border border-[#1A1A1A] bg-gradient-to-br from-[#C70A0E]/5 to-[#0A0A0A]/40 p-8 md:p-9'>
                        <div className='text-secondary text-xs font-bold tracking-[0.08em] uppercase mb-5'>Before we build, we ask</div>
                        {questions.map((q, i) => (
                            <div key={i} className={`flex gap-4 items-start py-4 ${i === 0 ? '' : 'border-t border-[#1A1A1A]'}`}>
                                <span className='flex-shrink-0 w-[26px] h-[26px] rounded-lg border border-[#C70A0E]/50 flex items-center justify-center text-secondary mt-px'>
                                    <Check size={15} strokeWidth={2} />
                                </span>
                                <span className='font-semibold md:text-[0.96rem] text-sm leading-snug'>{q}</span>
                            </div>
                        ))}
                        <div className='mt-5 pt-5 border-t border-dashed border-[#C70A0E]/40 text-white font-bold md:text-[0.95rem]'>
                            Only when the answer is clear do we <span className='text-secondary'>move forward.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== BUILDING FOR THE FUTURE ===== */}
            <section className='relative overflow-hidden text-center about-glow-center xl:px-32 lg:px-24 md:px-32 px-6 md:py-20 py-14'>
                <div className='relative z-[2] max-w-[60ch] mx-auto'>
                    <span className='text-secondary md:text-xl text-lg font-bold block mb-4'>BUILDING FOR THE FUTURE</span>
                    <h2 className='md:text-4xl text-2xl font-extrabold leading-tight mb-5'>The challenges evolve. <span className='text-secondary'>So do we.</span></h2>
                    <p className='text-zinc-400 md:text-[0.97rem] text-sm leading-[1.85] mb-4'>
                        The challenges people face continue to evolve, and so do the opportunities to solve them.
                    </p>
                    <p className='text-zinc-400 md:text-[0.97rem] text-sm leading-[1.85]'>
                        As we grow, our commitment remains the same: to{' '}
                        <strong className='text-white font-bold'>discover meaningful challenges, build purposeful products,
                        and create lasting impact.</strong> Every product we launch is another step toward that mission.
                    </p>
                </div>
            </section>

            {/* ===== OUR TEAM (preserved) ===== */}
            <section className='xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-10'>
                <span className='text-secondary md:text-xl text-lg font-bold'>OUR TEAM</span>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-8'>
                    <div className='backdrop-shadow-white'>
                        <Image src='/founder-img.jpg' width={500} height={500} alt='Founder'
                            className=' rounded-[18px] border border-[#1A1A1A]' />
                    </div>
                    <div>
                        <p className='text-center lg:text-left md:text-2xl text-xl italic text-zinc-300 leading-relaxed'>
                            "Every challenge is a chance to innovate, every failure a lesson, and every launch a new beginning."
                        </p>
                        <div className='mt-8'>
                            <div className='h-1 w-3/5 bg-secondary rounded mb-4 shadow-[0_0_12px_rgba(199,10,14,0.6)]' />
                            <div className='md:text-4xl text-2xl font-extrabold'>AYUSH KASHYAP</div>
                            <div className='md:text-2xl text-xl font-bold text-secondary'>Founder, CTO</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CLOSING (crescendo) ===== */}
            <section className='relative overflow-hidden text-center about-glow-center about-tick xl:px-32 lg:px-24 md:px-32 px-6 md:py-20 py-16'>
                <div className='relative z-[2] flex flex-col items-center gap-1'>
                    <div className='md:text-5xl text-3xl font-black tracking-tight mb-4 bg-gradient-to-b from-white/90 to-(--secondary-color) bg-clip-text text-transparent'>
                        Discover. Build. Impact.
                    </div>
                    <p className='text-zinc-400 md:text-base text-sm max-w-[46ch] leading-relaxed mb-8'>
                        More than a tagline — these three words define how we think, how we work, and how we measure success.
                    </p>
                    <div className='flex flex-col gap-3'>
                        <div className='md:text-3xl text-xl font-bold text-zinc-300 opacity-60'>
                            We <span className='text-secondary'>discover</span> the challenges that matter.
                        </div>
                        <div className='md:text-3xl text-xl font-bold text-zinc-300 opacity-80'>
                            We <span className='text-secondary'>build</span> solutions with purpose.
                        </div>
                        <div className='md:text-3xl text-xl font-bold text-zinc-100'>
                            We create <span className='text-secondary'>impact</span> where it counts.
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutUs
