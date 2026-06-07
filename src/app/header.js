import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

function Header() {
  return (
    <header 
    className='flex justify-between items-center px-8 bg-glass-gradient'
    >
<Image 
    // style={{filter: "drop-shadow(0px 0px 20px #ffffff9d)"}}
    src="/austelix_transparent.png"
    width={100}
      height={100}
      alt="Picture of the author"
    />
    <nav 
    className='font-bold font-dm-sans text-center gap-4 flex'
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
    className='flex justify-between items-center gap-4 bg-white px-4 py-2 rounded-full font-semibold'
    >
       <span className='text-black'> Get In Touch </span>
    <div
    className='bg-secondary p-2 rounded-full'
    ><ArrowRight/></div>
    </a>
    </header>
    
  )
}

export default Header