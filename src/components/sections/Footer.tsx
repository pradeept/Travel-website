import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";
import googlePlay from "@/../public/footer/google-play.png";
import appleStore from "@/../public/footer/store.png";
import Image from "next/image";
import * as motion from "motion/react-client";
function Footer() {
  return (
    <section className='mx-10 lg:mx-15 mt-15 lg:mt-20 p-4'>
      <div className='grid grid-cols-3 gap-6 place-content-between text-gray-600 dark:text-gray-300'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className='col-span-3 lg:col-span-1 text-center  lg:max-w-60'
        >
          <h1 className=' text-3xl font-serif font-bold'>JadOO.</h1>
          <p className=' font-thin text-md break-words text-center'>
            Book your trip in minutes, get full Control for much longer.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className='col-span-3 lg:col-span-1 flex flex-wrap gap-4 justify-between'
        >
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>Company</h1>
            <p>About</p>
            <p>Careers</p>
            <p>Mobile</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>Contact</h1>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affiliates</p>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='font-bold'>More</h1>
            <p>Airlinefess</p>
            <p>Airline</p>
            <p>Low fare tips</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring",  visualDuration: 0.2 }}
          className='col-span-3 lg:col-span-1 mx-auto'
        >
          <div className='flex gap-3 justify-center'>
            <Facebook className='cursor-pointer hover:text-blue-400' />
            <Instagram className='cursor-pointer hover:text-pink-400' />
            <Twitter className='cursor-pointer hover:text-gray-400' />
          </div>
          <h1 className='text-xl text-center m-3 '>Discover Our App</h1>
          <div className='inline-flex gap-6 text-white dark:text-black'>
            {/* Google play button */}
            <div className='bg-black dark:bg-gray-400 inline-flex items-center px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition duration-400'>
              <Image
                src={googlePlay}
                width={44}
                height={44}
                alt='google-play-icon'
                placeholder='empty'
              />
              <div className='flex flex-col'>
                <h1 className='font-bold'>GET IT ON</h1>
                <p className='font-thin'>GOOGLE PLAY</p>
              </div>
            </div>
            {/* App store button */}
            <div className='bg-black dark:bg-gray-400 inline-flex items-center px-2 py-1 rounded-xl cursor-pointer hover:scale-105 transition duration-400'>
              <Image
                src={appleStore}
                width={44}
                height={44}
                alt='apple-store-icon'
                placeholder='empty'
                className='invert '
              />
              <div className='flex flex-col'>
                <h1 className='font-bold'>GET IT ON</h1>
                <p className='font-thin'>APPLE STORE</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <footer className='w-full text-center py-4 text-gray-500 text-sm border-t border-t-gray-300 mt-10'>
        Made with ❤️ using{" "}
        <span className='font-medium text-black dark:text-white'>Next-15</span>,{" "}
        <span className='font-medium text-sky-500'>Tailwind CSS</span>, and{" "}
        <span className='font-medium text-pink-500'>Motion</span> by{" "}
        <span className='font-semibold text-gray-700 dark:text-gray-300'>
          <a href='https://pradeept.netlify.app' className='underline' target="_blank">
            Pradeep Tarakar
          </a>
        </span>
      </footer>
    </section>
  );
}

export default Footer;
