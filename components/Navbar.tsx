import React from 'react'
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='absolute p-5 w-full flex justify-around z-50'>
        <Image
            src={"/flyboarding-ptbo.svg"}
            quality={1}
            priority
            height={200}
            width={200}
            alt='Logo'
            className='size-20 md:size-44'
        />
        <div className='flex items-center gap-2 md:gap-5'>
            <a href='#home' className='text-sm md:text-2xl font-bold text-white/50 hover:text-red-500'>
                Home
            </a>
            <a href='#service' className='text-sm md:text-2xl font-bold text-white/50 hover:text-red-500'>
                Service
            </a>
            <a href='#contact' className='text-sm md:text-2xl font-bold text-white/50 hover:text-red-500'>
                Contact
            </a>
        </div>
    </nav>
  )
}
