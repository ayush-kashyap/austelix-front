import React from 'react'
import Header from './header'
import { Brain,ArrowRight } from 'lucide-react'

function WelcomeScreen() {
  return (
    <div
      className="bg-main h-screen"
    >
      <Header />

      <div
        className="flex flex-col gap-12 items-center md:items-start justify-center h-[calc(100vh-100px)] md:px-16"
      >
        <div
          className="flex gap-2 items-center py-2 px-4 border border-gray-800 rounded-full"
        >
          <Brain strokeWidth={1} size={20} />
          <span className="lg:text-lg md:text-md text-xs">
            Intelligent Software, &nbsp;

            <span className="text-secondary">Powerful Brands</span>
          </span>
        </div>
        <span
          className="lg:text-6xl sm:text-5xl text-2xl text-center md:text-left font-bold font-Mon"
        >
          Digital Solutions <br />That Empower
          <br />
          <span
            className="text-secondary"
          >Your Business</span>
        </span>
        <span className="lg:text-xl md:text-lg md:block hidden font-semibold ">
          AI Powered SAAS Solutions <span className="text-secondary">|</span> Custom Softwares <span className="text-secondary">|</span> Digital Marketing
        </span>
        <a
    href='https://ayushk.in'
    target='_blank'
    className='bg-secondary sliding-animation  flex justify-between items-center gap-4   md:pl-4 md:pr-6 md:py-2  py-1 px-2 rounded-full font-semibold red-shadow '
    >
       <span className='lg:text-lg md:text-md text-xs'> Let's Build Something Great </span>
    <div
    className='bg-secondary p-1 rounded-full '
    ><ArrowRight className=""/></div>
    </a>
      </div>

{/* Uncomment this when we have clients to show also change the height of above container repectively */}

      {/* <div 
      className="h-[calc(20vh)] gap-4 flex flex-col items-center justify-center"
      >
        <span className="text-2xl text-gray-500 font-bold">Our Clients</span>
        <span className="text-2xl text-gray-500 font-bold" >Cisco  disco  pisco</span>
      </div> */}
    </div>
  )
}

export default WelcomeScreen