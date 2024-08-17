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
            className=''
        />
        <div className='flex items-center gap-5'>
            <a href='#home' className='text-2xl font-bold text-white/50 hover:text-red-500'>
                Home
            </a>
            <a href='#home' className='text-2xl font-bold text-white/50 hover:text-red-500'>
                Service
            </a>
            <a href='#home' className='text-2xl font-bold text-white/50 hover:text-red-500'>
                Contact
            </a>
        </div>
    </nav>
  )
}
