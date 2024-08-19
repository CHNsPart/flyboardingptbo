import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <div id='home' className="relative w-full h-[80vh]">
      <Navbar/>
      <Image
        src="/hero-m.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-80 px-5 md:px-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-normal">Experience the Thrill of <br className='hidden md:block' /> Flyboarding in <span className='bg-red-500'>Peterborough</span></h1>
        <p className="text-md max-w-sm md:text-xl md:max-w-2xl mt-5 italic">
            {"Experience the ultimate thrill with Flyboarding Peterborough! Soar above the water, dive like a dolphin, and feel the adrenaline. Book your adventure today and defy gravity!"}</p>
      </div>
    </div>
  );
}
