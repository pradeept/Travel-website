import Image from "next/image";
import React from "react";
import vector1 from "@/../public/steps-section/vector1.png";
import vector2 from "@/../public/steps-section/vector2.png";
import vector3 from "@/../public/steps-section/vector3.png";
import TravelCard from "../TravelCard";
import * as motion from "motion/react-client";
function Steps() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      className='grid grid-cols-2 gap-4 mx-5 lg:mx-10 mt-15 lg:mt-28 p-4 '
    >
      {/* Left section */}
      <div className='col-span-2 lg:col-span-1'>
        <h3 className='text-md text-[#5E6282]'>Easy and Fast</h3>
        <h1 className='text-blue-950 dark:text-blue-200 text-5xl font-serif font-bold'>
          Book Your Next Trip In 3 Easy Steps
        </h1>
        <div className='grid grid-rows-3 gap-6 mt-12'>
          <div className='flex items-start gap-4'>
            <Image
              src={vector1}
              alt='vector1'
              height={40}
              width={40}
              className='p-3 bg-amber-300 rounded-lg'
            />
            <div className='flex flex-col  justify-start'>
              <h2 className='font-bold text-[#5E6282]'>Choose Destination</h2>
              <p className=' text-[#5E6282] max-w-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Image
              src={vector2}
              alt='vector1'
              height={40}
              width={40}
              className='p-3 bg-orange-500 rounded-lg'
            />
            <div className='flex flex-col  justify-start'>
              <h2 className='font-bold text-[#5E6282]'>Make Payment</h2>
              <p className=' text-[#5E6282] max-w-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Image
              src={vector3}
              alt='vector1'
              height={40}
              width={40}
              placeholder='empty'
              className='p-3 bg-green-400 rounded-lg'
            />
            <div className='flex flex-col  justify-start'>
              <h2 className='font-bold text-[#5E6282]'>
                Reach Airport on Selected Date
              </h2>
              <p className=' text-[#5E6282] max-w-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className='flex justify-center'>
        <TravelCard />
      </div>
    </motion.section>
  );
}

export default Steps;
