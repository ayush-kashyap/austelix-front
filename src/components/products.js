import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Products() {

    const projects = [
        {
            image: "/austelix-transparent.png",
            title: "AI Solutions",
            description: "Smart automation powered by cutting-edge AI.",
            tags:["AI Powered", "Smart"]

        },
        {
            image: "/austelix-transparent.png",
            title: "AI  dSolutions",
            description: "Smart automation fasd asdas d asd powered by cutting-edge AI.",
            tags:["AI Powered", "Smart" ]

        }
    ]
    return (
        <div className=' xl:px-32 lg:px-24 md:px-32 px-6 md:py-16 py-8 flex  flex-col justify-between items-start gap-8'>

            <span className='md:text-xl text-lg font-bold text-secondary'>
                OUR PRODUCTS
            </span>
            <span className='flex justify-between'>
                <span className='md:text-4xl text-xl font-bold '>
                    <span className='text-secondary'>Impacts</span> We've<br />
                    <span className=' '>
                        Made
                    </span>

                </span>
            </span>
            <span className='text-xs md:text-sm'>We make robust solutions to daily life challenges</span>

            <div className='grid lg:grid-cols-2  grid-cols-1 gap-4'>
                {
                    projects.map(
                        (project, index) =>
                            <div
                                key={project.title}
                                className="
    w-full
    bg-[#0A0A0A]
    border border-[#1A1A1A]
    rounded-3xl
    p-6 md:p-10
    flex flex-col lg:flex-row
    gap-8
    overflow-hidden
    relative
  "
                            >
                                {/* Project Number */}
                                <span
                                    className="
      absolute
      top-6
      left-6
      text-3xl
      font-bold
      text-white/80
    "
                                >
                                    0{index + 1}
                                </span>

                                {/* Image Section */}
                                <div
                                    className="
      flex-1
      mt-10
      relative
    "
                                >
                                    <div
                                        className="
        absolute
        bottom-0
        left-0
        h-40
        w-32
        bg-[#C70A0E]/20
        blur-3xl
      "
                                    />

                                    <Image
                                        src={project.image}
                                        width={500}
                                        height={500}
                                        alt={project.title}
                                        className="
        w-full
        rounded-3xl
        border
        border-gray-800
        object-cover
      "
                                    />
                                </div>

                                {/* Content Section */}
                                <div
                                    className="
      flex-1
      flex
      flex-col
      justify-center
      gap-6
      lg:px-6
    "
                                >
                                    {/* Logo + Name */}
                                    <div className="flex items-center gap-4">


                                        <span
                                            className="
          font-semibold
          text-lg
        "
                                        >
                                            {project.title}
                                        </span>
                                    </div>



                                    {/* Description */}
                                    <p
                                        className="
        text-zinc-400
        max-w-lg
        leading-relaxed
      "
                                    >
                                        {project.description}
                                    </p>

                                    {/* Divider */}
                                    <div className="h-px bg-zinc-800 w-full" />

                                    {/* CTA */}
                                    <Link
                                        href={'/'}
                                        className="
        flex
        items-center
        cursor-pointer
        gap-4
        text-lg
        font-semibold
        w-fit
        group
      "
                                    >
                                        View Project

                                        <span
                                            className="
          text-secondary
          transition-transform
          duration-300
          group-hover:translate-x-2
        
        "
                                        >
                                            →
                                        </span>
                                    </Link>

                                    <div className=' flex gap-2'>
                                        {project.tags.map(
                                            (tag) => <div
                                            key={project.title+tag}
                                                className='py-0.5 px-2 border border-[#C70A0E]/50  bg-[#C70A0E]/10 rounded-3xl text-xs w-fit text-white'
                                            >
                                                {tag}

                                            </div>

                                        )}

                                    </div>

                                </div>
                            </div>

                        //     <div
                        //     key={project.title}
                        //     className='bg-[rgba(10,10,10,1)] text-white w-full flex p-8 rounded-2xl '
                        // >

                        //     <Image
                        //     className='border border-gray-800 rounded-3xl'
                        //     src={project.image}
                        //     width={200}
                        //     height={300}

                        //     />
                        //     <div
                        //             className=' w-full h-full rounded-br-2xl rounded-tr-2xl p-8 flex flex-col justify-center gap-2'
                        //         >

                        //             <span
                        //                 className='md:text-md text-sm font-bold '
                        //             >
                        //                 {project.title}
                        //             </span>

                        //             <span className='md:text-sm text-xs'>
                        //                 {project.description}
                        //             </span>
                        //         </div>

                        //     </div>
                    )
                }
            </div>
        </div>
    )
}

export default Products