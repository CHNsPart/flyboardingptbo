import React from 'react';

export default function Contact() {
  return (
    <div className="w-full bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-gray-100 p-4 sm:flex-row md:p-8">
          <div>
            <p className="text-gray-600">Wanna Pre-Book for upto 50% Off?</p>
            <h2 className="text-xl font-bold text-red-500 md:text-2xl">Call Us Now</h2>
          </div>
          
          <a
            href="tel:+17053152060"
            className="inline-block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            +1-705-315-2060
          </a>
        </div>
      </div>
    </div>
  );
}
