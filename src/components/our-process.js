import React from 'react'
import {
    Search,
    Compass,
    PenTool,
    Code2,
    Rocket,
    
} from "lucide-react";

function OurProcess() {

    const steps = [
        {
            step: "01",
            title: "Discover",
            description:
              "We understand your goals, audience, and requirements.",
            icon: Search,
          },
          {
            step: "02",
            title: "Plan",
            description:
              "We create a strategy and roadmap for your project.",
            icon: PenTool,
          },
          {
            step: "03",
            title: "Design",
            description:
              "Stunning designs that align with your brand.",
            icon: Compass,
          },
          {
            step: "04",
            title: "Develop",
            description:
              "We build fast, responsive, and scalable websites.",
            icon: Code2,
          },
          {
            step: "05",
            title: "Launch",
            description:
              "We test, optimize, and launch with confidence.",
            icon: Rocket,
          },
    ]
    return (
        <div className=' md:px-32 px-6 md:py-16 pb-8 flex flex-col justify-start gap-8'>
            <span className='md:text-xl text-lg font-bold text-secondary'>
                OUR PROCESS
            </span>
            <span className='flex justify-between'>
                <span className='md:text-4xl text-xl font-bold '>
                    Simple Process<br />
                    <span className='text-secondary '>
                        Powerful Results.
                    </span>

                </span>
            </span>
            <span className='text-xs md:text-sm'>We follow a proven process that ensures clarity,
                quality, and on-time delivery</span>

            <div
                className='flex md:flex-row flex-col justify-evenly items-start gap-16'
            >
                {steps.map(
                    (item) => {
                        const Icon = item.icon
                        return <div key={item.step} className='flex md:flex-col flex-row items-start md:items-center '>

                            <span className=" md:text-9xl text-6xl font-black number-bg">
                                {item.step}
                            </span>

                            <div className='flex items-center flex-col'>
                            <div className=" p-8 rounded-full border border-secondary ">
                                <Icon
                                    size={45}
                                    strokeWidth={1}
                                />
                            </div>
                            <div
                                className='h-8 border border-secondary border-dashed'
                            >
                            </div>
                            <div className=''>
                                <div
                                    key={item.title}
                                    className='bg-gradient-border rounded-2xl p-0.5 md:max-w-[calc(15vw)] w-full'
                                >
                                    
                                        
                                        <div
                                            className='bg-[rgba(10,10,10,1)]  rounded-2xl  p-8 flex flex-col justify-center gap-2 '
                                        >
                                            <div 
                                            className='h-0.5 w-10 bg-secondary rounded-3xl mb-4'
                                            >

                                            </div>

                                            <span
                                                className='md:text-xl text-lg font-bold '
                                            >
                                                {item.title}
                                            </span>

                                            <span className='md:text-sm text-xs'>
                                                {item.description}
                                            </span>
                                        </div>



                                </div>
                            </div>
                            </div>
                        </div>
                    }
                )
                }
            </div>

        </div>
    )
}

export default OurProcess