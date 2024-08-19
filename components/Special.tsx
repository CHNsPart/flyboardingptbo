import Image from 'next/image'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Special() {
  return (
    <div id='service' className="w-full bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-zinc-950 sm:flex-row md:h-80">
          {/* content - start */}
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Tailor-Made Packages <br /> for Every Event
            </h2>

            <p className="mb-8 max-w-md text-gray-400">
                {"Contact us for custom rates, extended rentals, and on-site services."}
            </p>

            <div className="mt-auto">
              <span className='flex items-center gap-2 text-white'>
                <FaPhoneAlt className='text-red-500'/> +1-705-315-2060
              </span>
            </div>
          </div>
          {/* content - end */}

          {/* image - start */}
          <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <Image
              src="/hero.jpg"
              priority 
              quality={100}
              height={500}
              width={500}
              alt="Photo by Dom Hill" 
              className="h-full w-full object-cover object-center" 
            />
          </div>
          {/* image - end */}
        </div>
      </div>
    </div>
  )
}
