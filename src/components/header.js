import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function Header() {
  return (
    <header 
    className='flex justify-between items-center md:px-8 px-4 bg-glass-gradient'
    >
<Image 
    // style={{filter: "drop-shadow(0px 0px 20px #ffffff9d)"}}
    src="/austelix-transparent.png"
    width={100}
      height={100}
      alt="austelix"
    />
    <nav 
    className='font-bold font-dm-sans text-center gap-4 md:flex hidden'
    >
        <a href='#'>Home</a>
        <a href='#'>Services</a>
        <a href='#'>About Us</a>
        <a href='#'>Work</a>
        <a href='#'>Pricing</a>
        <a href='#'>Blog</a>
        <a href='#'>Contact Us</a>
    </nav>
    <a
    href='https://ayushk.in'
    target='_blank'
    className='flex justify-between items-center gap-4 bg-white  md:px-4 md:py-2  py-1 px-2 rounded-full font-semibold'
    >
       <span className='text-black'> Get In Touch </span>
    <div
    className='bg-secondary  p-1 rounded-full'
    ><ArrowRight/></div>
    </a>
    </header>
    
  )
}

export default Header
