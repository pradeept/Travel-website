import Image from "next/image";
import React from "react";
import vector from "@/../public/Decore.png";
import traveller from "@/../public/traveller_gpt.png";
import { PlayCircle } from "lucide-react";
import underline from "@/../public/decore_underline.png";
import plane from "@/../public/plane.png";
// import * as motion from "motion/react-client";
import Category from "../components/sections/Category";
import Selling from "@/components/sections/Selling";
import Steps from "@/components/sections/Steps";
import Testimonials from "@/components/sections/Testimonials";
import Subscribe from "@/components/sections/Subscribe";
import Footer from "@/components/sections/Footer";
import * as motion from "motion/react-client"

function Home() {
  return (
    <main className=''>
      <section className='grid grid-cols-1 mx-5 mt-5 lg:mt-0 lg:grid-cols-2 lg:mx-10 lg:gap-10 '>
        <Image
          src={vector}
          placeholder='blur'
          width={480}
          height={720}
          className='absolute top-0 right-0 z-[-10] overflow-hidden dark:invert'
          alt='vector'
        />
        <motion.div
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{type:"spring", duration:0.7}}
          className='flex flex-col gap-10 col-span-2 lg:gap-0 lg:col-span-1 place-content-center break-words text-center'
        >
          <h3 className='text-orange-500 dark:text-orange-300 font-bold'>
            BEST DESTINATIONS AROUND THE WORLD
          </h3>
          <h1 className='text-blue-950 dark:text-blue-200 text-7xl font-serif font-bold '>
            Travel,{" "}
            <span className='relative inline-block ml-1'>
              <span
                className='absolute bottom-0 left-0 w-full h-[0.2em] bg-no-repeat bg-center bg-contain pointer-events-none'
                style={{
                  backgroundImage: `url(${underline.src})`,
                }}
              ></span>
              <span className='relative'>enjoy</span>
            </span>{" "}
            and live a new and full life
          </h1>
          <p className='text-blue-800 dark:text-blue-100 font-thin text-md'>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 items-center justify-center mt-10'>
            <button className='bg-orange-500 dark:bg-orange-300 rounded-lg px-4 py-2 text-white dark:text-blue-950 cursor-pointer hover:bg-orange-600 dark:hover:bg-orange-400'>
              Find Out More
            </button>
            <span className='flex gap-2 items-center justify-center dark:text-white'>
              <PlayCircle
                size={40}
                className='bg-orange-500 cursor-pointer dark:bg-orange-300 text-gray-100 dark:text-blue-950 rounded-full'
              />{" "}
              Play Demo
            </span>
          </div>
        </motion.div>
        <motion.div
          className='hidden lg:block lg:col-span-1 z-10 relative '
          initial={{ opacity: 0, x:200 }}
          whileInView={{ opacity: 1, x:0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            scale: { type: "spring", bounce: 0.2 },
          }}
        >
          <Image
            src={plane}
            placeholder='empty'
            width={100}
            height={100}
            alt='plane-vector-1'
            className='absolute top-15 left-20'
          />
          <Image
            src={traveller}
            priority
            placeholder='empty'
            width={480}
            height={400}
            alt='traveller-image'
            className='mix-blend-darken dark:mix-blend-lighten transition-all duration-300'
          />
          <Image
            src={plane}
            placeholder='empty'
            width={100}
            height={100}
            alt='plane-vector-1'
            className='absolute top-50 right-20'
          />
        </motion.div>
      </section>
      <Category />
      <Selling />
      <Steps />
      <Testimonials/>
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Home;
