import React from 'react'
import { FaPhoneAlt, FaBusinessTime, FaLocationArrow } from "react-icons/fa";

export default function Banner() {
  return (
    <div className='w-full p-5 flex flex-col md:flex-row gap-5 justify-center items-center bg-zinc-950 text-white'>
        <span className='flex items-center gap-2'>
            <FaPhoneAlt className='text-red-500'/> +1-705-315-2060
        </span>
        <span className='flex items-center gap-2'>
            <FaBusinessTime className='text-red-500'/> Appointment Only
        </span>
        <span className='flex items-center gap-2'>
            <FaLocationArrow className='text-red-500'/> Del Crary Park, Peterborough
        </span>
    </div>
  )
}
