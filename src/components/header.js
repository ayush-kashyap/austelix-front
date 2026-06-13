import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react' 
import Link from 'next/link'

function Header({active}) {
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
    className='font-bold font-dm-sans text-center gap-4 lg:flex hidden'
    >
        <div className={`${active=="home"? "border-b-2 border-(--secondary-color)":""} p-1  `}>
        <Link href='/' className='text-shadow-lg text-shadow-white/10'>Home</Link>
        </div>
        <div className={`${active=="service"? "border-b-2 border-[var(--secondary-color)]":""} p-1`}>
        <Link href='/services' className='text-shadow-lg text-shadow-[#fff]/10'>Services</Link>
        </div>
        <div className={`${active=="about"? "border-b-2 border-(--secondary-color)":""} p-1`}>
        <Link href='/about-us' className='text-shadow-lg text-shadow-white/10'>About Us</Link>
        </div>
        <div className={`${active=="work"? "border-b-2 border-(--secondary-color)":""} p-1`}>
        <Link href='/work' className='text-shadow-lg text-shadow-white/10'>Work</Link>
        </div>
        {/* <div className={`${active=="pricing"? "border-b-2 border-[var(--secondary-color)]":""} p-1`}>
        <Link href='/pricing' className='text-shadow-lg text-shadow-[#fff]/10'>Pricing</Link>
        </div> */}
        <div className={`${active=="blog"? "border-b-2 border-(--secondary-color)":""} p-1`}>
        <Link href='/blogs' className='text-shadow-lg text-shadow-white/10'>Blog</Link>
        </div>
        <div className={`${active=="contact"? "border-b-2 border-(--secondary-color)":""} p-1`}>
        <Link href='/contact-us' className='text-shadow-lg text-shadow-white/10'>Contact Us</Link>
        </div>
        
    </nav>
    {/* <Link
    href='https://ayushk.in'
    target='_blank'
    className='flex justify-between items-center gap-4 bg-white  md:px-4 md:py-2  py-1 px-2 rounded-full font-semibold'
    >
       <span className='text-black'> Get In Touch </span>
    <div
    className='bg-secondary  p-1 rounded-full'
    ><ArrowRight/></div>
    </Link> */}
    </header>
    
  )
}

export default Header
