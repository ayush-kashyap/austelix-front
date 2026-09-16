import React from 'react'
import { Sparkles, Rocket,Palette,ShoppingCart,Fingerprint, CodeXml, TrendingUp, Headset, Smartphone } from 'lucide-react'

function WhatWeDo() {
    
       const services = [
        {
          icon: Sparkles,
          title: "AI Solutions",
          description: "Smart automation powered by cutting-edge AI.",
        },
        {
          icon: CodeXml,
          title: "Web Development",
          description: "Fast, scalable websites built for growth.",
        },
        {
          icon: TrendingUp,
          title: "Digital Marketing & SEO",
          description: "Drive traffic, rankings, and conversions.",
        },
        {
          icon: Smartphone,
          title: "App Development",
          description: "Custom mobile apps for every platform.",
        },
        {
          icon: Rocket,
          title: "Performance Optimization",
          description: "Boost speed, reliability, and user experience.",
        },
        {
          icon: Headset,
          title: "Support & Maintenance",
          description: "Keeping your digital products running smoothly.",
        },
        {
          icon: Palette,
          title: "UI/UX Design",
          description: "Crafting intuitive and engaging user experiences.",
        },
        {
          icon: ShoppingCart,
          title: "E-Commerce Solutions",
          description: "Online stores designed to maximize sales and growth.",
        },
        {
          icon: Fingerprint,
          title: "Brand Identity",
          description: "Creating memorable brands that stand out.",
        },
    ];
    return (
        <div
            className=' gap-8 bg-black xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex flex-col justify-start'
        >
            <span className=' text-secondary font-bold md:text-xl '>
                WHAT WE OFFER
            </span>

            <span className='flex justify-between'>
                <span className='md:text-4xl text-xl font-bold flex-2'>
                    Powerful Solutions for <br />
                    Modern <span className='text-secondary'>Businesses</span>
                </span>

                {/* <span className='flex-1 text-sm'>

                We combine creativity, technology and strategy to build websites that not only look amazing but also deliver <span className='font-semibold'>measurable growth</span>.
            </span> */}

            </span>



            <div
                className='grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4'
            >

                {
                    services.map((service)=>{
                    const Icon=service.icon;
                    return <div
                    key={service.title}
                    className='bg-gradient-border rounded-2xl'
                >
                    <div
                        className='bg-black m-0.5 h-32 rounded-2xl flex items-center'
                    >
                        <
                            Icon
                            size={60}
                            strokeWidth={1}
                            className='mx-8'
                        />
                        <div
                            className='bg-[rgba(50,50,50,0.25)] w-full h-full rounded-br-2xl rounded-tr-2xl p-4 flex flex-col justify-center gap-2'
                        >

                            <span
                                className='md:text-md text-sm font-bold '
                            >
                                {service.title}
                            </span>

                            <span className='md:text-sm text-xs'>
                                {service.description}
                            </span>
                        </div>

                    </div>

                    </div>})
                    
                }
                {/* <div
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

                </div> */}
            </div>


        </div>
    )
}

export default WhatWeDo