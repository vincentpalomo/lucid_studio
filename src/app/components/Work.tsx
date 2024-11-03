import React from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';

const Work = () => {
  return (
    <div
      className="min-h-screen bg-off-black text-off-white font-montserrat flex flex-col items-center px-4 sm:px-0"
      id="work"
    >
      <div className="w-full max-w-[960px] mt-20 mb-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase font-black text-center sm:text-left">
          Our Work
        </h1>
      </div>

      <div className="flex flex-col w-full max-w-[960px] text-2xl sm:text-4xl lg:text-5xl uppercase mt-5">
        {['website', 'website', 'website', 'website'].map((item, index) => (
          <div
            key={index}
            className="border-t-2 last:border-b-2 flex justify-between items-center cursor-pointer hover:bg-purple-400 px-4 py-6 sm:py-8"
          >
            {item}
            <span className="hidden sm:block">
              <Image src={arrow} alt="arrow" width={24} height={24} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
