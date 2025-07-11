import { MailQuestion } from "lucide-react";
import Image from "next/image";
import React from "react";
import dots_vector from "@/../public/dots.png";
import plane from "@/../public/testimonials/subscription_plane.png";

function Subscribe() {
  return (
    <section className='lg:px-24 py-8 relative'>
      <div className='bg-purple-100 dark:bg-gray-800 rounded-t-2xl lg:p-20 p-10 flex flex-col gap-10 relative'>
        <div>
          <h1 className='text-2xl md:text-3xl font-bold text-[#14183eb9] dark:text-slate-300 text-center break-words'>
            Subscribe to get information, latest news and other interesting
            offers about Jadoo!
          </h1>
        </div>
        <div className='flex justify-center gap-4'>
          <div className='inline-flex items-center p-2 border border-gray-500 rounded-2xl'>
            <MailQuestion />
            <input
              type='email'
              className='p-2 focus:outline-none'
              placeholder='Your email'
            />
          </div>
          <button className='bg-orange-500 dark:bg-orange-300 rounded-lg  p-2 text-white dark:text-blue-950 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-400'>
            Subscribe
          </button>{" "}
        </div>
        <Image
          src={plane}
          width={44}
          height={44}
          alt='paper-plane'
          placeholder='empty'
          className='hidden lg:block lg:absolute lg:top-[-15] lg:right-[-15]'
        />
      </div>
      <Image
        src={dots_vector}
        className='absolute bottom-0 right-5 lg:right-5 dark:opacity-15 dark:lg:opacity-80 z-[-10] rotate-90'
        height={100}
        width={100}
        alt='dots-vector'
        placeholder='empty'
      />
    </section>
  );
}

export default Subscribe;
