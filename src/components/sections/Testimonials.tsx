import { testimonialType } from "@/util/testimonial.type";
import React from "react";
import user1 from "@/../public/testimonials/user1.jpg";
import user2 from "@/../public/testimonials/user2.jpg";
import user3 from "@/../public/testimonials/user3.jpg";
import TestimonialCards from "../TestimonialCards";
import logo1 from "@/../public/testimonials/logo1.png";
import logo2 from "@/../public/testimonials/logo2.png";
import logo3 from "@/../public/testimonials/logo3.png";
import logo4 from "@/../public/testimonials/logo4.png";
import Image from "next/image";

const testimonials: testimonialType[] = [
  {
    id: 1,
    pic: user1,
    name: "Chris Thomas",
    about: "CEO of RedBikes",
    quote:
      "Exploring hidden beaches with your itinerary was unforgettable—memories made every single day. Highly recommend!",
  },
  {
    id: 2,
    pic: user2,
    name: "Disha K",
    about: "Traveller, India",
    quote:
      "After going through a number of sites, I had to settle for Jadoo because honestly it was a no brainer trying someone else",
  },
  {
    id: 3,
    pic: user3,
    name: "Sham B",
    about: "CTO of BomBomGo",
    quote:
      "From booking to farewell, everything was seamless. Accommodations, guides, and meals exceeded expectations.",
  },
];

export default function Testimonials() {
  return (
    <section className='mx-10 lg:mx-15 my-15 '>
      <div className='grid grid-cols-3 gap-6 min-h-96 '>
        {/* Left Section */}
        <div className='flex flex-col gap-4 col-span-3 lg:col-span-1'>
          <p className='text-blue-800 dark:text-blue-100 font-thin text-lg'>
            TESTIMONIALS
          </p>
          <h1 className='text-blue-950 dark:text-blue-200 text-5xl font-serif font-bold'>
            What People Say About Us.
          </h1>
        </div>
        {/* Right Section */}
        <div className='flex w-full h-full justify-center items-center col-span-3 lg:col-span-2'>
          <TestimonialCards data={testimonials} />
        </div>
      </div>
      <div
       
        className='w-full items-center justify-evenly flex gap-6 flex-wrap select-none'
      >
        <div className='p-4 hover:shadow-lg rounded-2xl group'>
          <Image
            src={logo1}
            width={140}
            height={140}
            placeholder='empty'
            alt='logo-1'
            className='grayscale group-hover:grayscale-0'
          />
        </div>
        <div
          className='p-4 hover:shadow-lg rounded-2xl group'
          // initial={{ y: 200 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 0.5, type: "spring", delay: 0.1 }}
        >
          <Image
            src={logo2}
            width={140}
            height={140}
            placeholder='empty'
            alt='logo-2'
            className='grayscale group-hover:grayscale-0'
          />
        </div>
        <div
          className='p-4 hover:shadow-lg rounded-2xl group'
          // initial={{ y: 200 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
        >
          <Image
            src={logo3}
            width={140}
            height={140}
            placeholder='empty'
            alt='logo-3'
            className='grayscale group-hover:grayscale-0'
          />
        </div>
        <div
          className='p-4 hover:shadow-lg rounded-2xl group'
          // initial={{ y: 200 }}
          // animate={{ y: 0 }}
          // transition={{ duration: 0.5, type: "spring", delay: 0.3 }}
        >
          <Image
            src={logo4}
            width={140}
            height={140}
            placeholder='empty'
            alt='logo-4'
            className='grayscale group-hover:grayscale-0'
          />
        </div>
      </div>
    </section>
  );
}
