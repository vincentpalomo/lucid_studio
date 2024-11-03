'use client';

import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-off-black text-off-white font-montserrat flex justify-center items-center px-4 sm:px-0"
      id="contact"
    >
      <div className="w-full max-w-[980px] flex flex-col items-center justify-around mt-20">
        <div className="w-full pointer-events-none mb-8">
          <h1 className="font-montserrat uppercase text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center sm:text-left">
            let&apos;s talk
          </h1>
        </div>

        <div className="flex items-center mb-8">
          <p className="w-full tracking-[.08em] leading-[1.5em] text-sm sm:text-base font-montserrat text-center sm:text-left">
            Ready to elevate your online presence? Get in touch with us today to discuss your project and take the first
            step towards digital success. Whether you have a specific vision in mind or need guidance in shaping your
            online strategy, our team is here to help. Reach out to us via phone, email, or the contact form below, and
            let&apos;s bring your digital dreams to life together.
          </p>
        </div>

        <div className="w-full">
          <h2 className="uppercase text-xl font-bold mb-4 text-center sm:text-left">say hello</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
