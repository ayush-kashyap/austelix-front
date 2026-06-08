import React from 'react'
import { Sparkles, Gauge, CodeXml, TrendingUp, Headset, Smartphone } from 'lucide-react'

function WhatWeDo() {
    return (
        <div
            className=' gap-8 bg-black px-32 py-16 flex flex-col justify-start'
        >
            <span className='text-center text-secondary font-bold text-xl '>
                WHAT WE OFFER
            </span>

            <span className='flex justify-between'>
                <span className='text-4xl font-bold flex-2'>
                    Powerful Solutions for <br />
                    Modern <span className='text-secondary'>Businesses</span>
                </span>

                {/* <span className='flex-1 text-sm'>

                We combine creativity, technology and strategy to build websites that not only look amazing but also deliver <span className='font-semibold'>measurable growth</span>.
            </span> */}

            </span>



            <div
                className='grid grid-cols-3 gap-4'
            >

                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <Sparkles
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                AI Solutions
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>
                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <CodeXml
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                Website Development
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>
                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <TrendingUp
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                Digital Marketing & SEO
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>

                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <Gauge
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                Performance Optimization
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>
                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <Smartphone
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                Mobile App Development
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>
                <div
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <Headset
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='text-md font-bold '
                            >
                                Maintainance & Support
                            </span>

                            <span className='text-sm'>
                                Applications that make your life easy not complicate it.
                            </span>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default WhatWeDo