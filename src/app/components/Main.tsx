'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Main = () => {
  const [active, setActive] = useState(0);

  const scrollToHome = () => {
    setActive(1);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#home' }, ease: 'power2.inOut' });
  };

  const scrollToAbout = () => {
    setActive(2);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#about' }, ease: 'power2.inOut' });
  };

  const scrollToWork = () => {
    setActive(3);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#work' }, ease: 'power2.inOut' });
  };

  const scrollToContact = () => {
    setActive(4);
    gsap.to(window, { duration: 1.5, scrollTo: { y: '#contact' }, ease: 'power2.inOut' });
  };

  return (
    <main className="flex min-h-screen flex-col items-center bg-off-black text-off-white relative" id="home">
      <div className="bg-noise w-full h-screen fixed opacity-[.02] pointer-events-none"></div>

      <nav className="fixed flex justify-between items-center px-24 w-full h-[70px] uppercase font-switzer text-xl tracking-wide">
        <h1 className="cursor-pointer" onClick={scrollToHome}>
          lucid studio ✌
        </h1>

        <ul className="flex justify-around space-x-5 w-fit">
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 1 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={scrollToHome}
          >
            <Link href="/">home</Link>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 2 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={scrollToAbout}
          >
            <Link href="/">about</Link>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 3 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={scrollToWork}
          >
            <Link href="/">work</Link>
          </li>
          <li
            className={`hover:text-purple-400 cursor-pointer ${active === 4 ? 'text-purple-400' : 'text-off-white'}`}
            onClick={scrollToContact}
          >
            <Link href="/">contact</Link>
          </li>
        </ul>
      </nav>

      <div className="h-[500px] w-[90%] flex items-center overflow-hidden opacity-25 bg-hero-pattern mt-[70px]"></div>

      <div className="flex justify-center overflow-hidden mt-5 ml-1">
        <p className="text-[11.25rem] uppercase tracking-[.20em] leading-[180px] font-montserrat">lucid studio</p>
        {/* <p className="text-[11.25rem] uppercase tracking-[.02em] leading-[180px] font-montserrat">vincent palomo</p> */}
      </div>

      <div className="w-[91%] flex items-center mt-5">
        <p className="w-[65%] text-off-grey tracking-[.02em] leading-[1.28em] text-[24px] font-montserrat">
          Our studio specializes in creating visually stunning websites that embody the essence of modern design. With a
          focus on sleek aesthetics and cutting-edge design, we bring your vision to life in the digital realm. Our team
          of digital artisans meticulously curates every pixel to ensure a seamless user experience that captivates and
          inspires.
        </p>
      </div>
    </main>
  );
};

export default Main;
