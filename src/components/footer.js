import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookF, faInstagram, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { Mail, Brain, PhoneCall } from 'lucide-react'

function Footer() {
    return (
        <div className=' xl:px-32 lg:px-24 md:px-32 px-6 md:pt-16 py-8 flex  flex-col justify-between items-center gap-8 bg-gray-50 text-black '>

            <div className=' flex  flex-col justify-between lg:items-center items-start gap-8 lg:flex-row'>
            
                <div className=''>

                    <Image src="/logo-transparent.png" alt="austelix" width={150} height={150} className=' mb-4' />
                    <span className="lg:text-lg md:text-md text-xs font-bold">
                        Intelligent Core, &nbsp;

                        <span className="text-secondary">Powerful Brands</span>
                    </span>
                    <div
                        className='flex gap-6 my-4 mx-4'
                    >
                        <FontAwesomeIcon icon={faFacebookF} height={30} />
                        <FontAwesomeIcon icon={faInstagram} height={30} />
                        <FontAwesomeIcon icon={faLinkedinIn} height={30} />


                    </div>
                </div>
                <div className='lg:h-40 h-0.5 lg:w-0.5 w-40 bg-gray-900'>
                </div>
                <div className='flex-1'>

                    <span className='text-lg font-semibold'>
                        Quick Links
                    </span>
                    <div
                        className='h-0.5 w-16 bg-secondary rounded-3xl mt-2'
                    >

                    </div>
                    <div
                        className='grid grid-cols-2 gap-4 mt-6'
                    >
                        <Link href='/'>Home</Link>
                        {/* <Link href='/services'>Services</Link> */}
                        <Link href='/about-us'>About Us</Link>
                        <Link href='/work'>Work</Link>
                        <Link href='/pricing'>Pricing</Link>
                        <Link href='/blogs'>Blog</Link>
                        <Link href='/contact-us'>Contact Us</Link>
                    </div>
                </div>

                <div className='lg:h-40 h-0.5 lg:w-0.5 w-40 bg-gray-900'>
                </div>
                <div className='flex-1'>

                    <span className='text-lg font-semibold'>
                        Let's Talk
                    </span>
                    <div
                        className='h-0.5 w-16 bg-secondary rounded-3xl mt-2 mb-4'
                    >

                    </div>
                    <span
                        className='text-sm '
                    >
                        We love to hear from Intelligent people like you
                    </span>
                    <div className='flex gap-4 items-center my-4'>
                        <PhoneCall size={18} />
                        <a href='tel:+917007583356'>
                            +91 7007583356
                        </a>
                    </div>
                    <div className='flex gap-4 items-center my-4'>
                        <Mail size={18} />
                        <a href='mailto:tech.austelix@gmail.com'>
                            tech.austelix@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            <span>
            © 2026 Austelix | All rights reserved.
            </span>
        </div>
    )
}

export default Footer