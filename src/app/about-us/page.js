import React from 'react'
import Image from 'next/image'
import Header from '@/components/header'

function AboutUs() {
    return (
        <div>
            <Header active={"about"} />

            <div 
            className='text-secondary md:text-xl text-lg font-bold md:px-32 md:pt-16 px-4 pt-2'>
                <span>
                    OUR TEAM
                </span>
            </div>
            <div
                className='md:px-32 px-4  relative flex justify-between items-center'
            >

                <Image
                    className='backdrop-shadow-white flex-1'
                    src={"/founder-img.png"}
                    alt='Founder'
                    height={500}
                    width={500}
                />
                <span
                    className='flex-1 text-center text-2xl italic lg:block hidden'
                >
                    "Every challenge is a chance to innovate, every failure a lesson, and every launch a new beginning"
                </span>

                <div
                    className='absolute bg-black w-full left-0 md:h-2/10 h-3/10 top-9/10 lg:px-40 md:px-32 px-6 flex flex-col'
                >
                    <div
                        className='h-1 bg-secondary xl:w-3/5 lg:w-4/5 w-full md:mb-8 mb-4'
                    >

                    </div>
                    <span
                        className='md:text-4xl text-2xl font-bold'
                    >
                        AYUSH KASHYAP

                    </span>
                    <span
                        className='md:text-2xl text-xl font-bold text-secondary'
                    >
                        Founder, CTO
                    </span>

                </div>

            </div>



        </div>
    )
}

export default AboutUs