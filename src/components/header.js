import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react' 
import Link from 'next/link'

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
        <Link href='#'>Home</Link>
        <Link href='#'>Services</Link>
        <Link href='/about-us'>About Us</Link>
        <Link href='#'>Work</Link>
        <Link href='#'>Pricing</Link>
        <Link href='#'>Blog</Link>
        <Link href='#'>Contact Us</Link>
    </nav>
    <Link
    href='https://ayushk.in'
    target='_blank'
    className='flex justify-between items-center gap-4 bg-white  md:px-4 md:py-2  py-1 px-2 rounded-full font-semibold'
    >
       <span className='text-black'> Get In Touch </span>
    <div
    className='bg-secondary  p-1 rounded-full'
    ><ArrowRight/></div>
    </Link>
    </header>
    
  )
}

export default Header
