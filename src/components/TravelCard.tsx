import Image from "next/image";
import React from "react";
import traveller from "@/../public/traveller.png";
import hampi from "@/../public/top-destinations/hampi.jpg";
import vector1 from "@/../public/steps-section/sm_cardv1.png";
import vector2 from "@/../public/steps-section/sm_cardv2.png";
import vector3 from "@/../public/steps-section/sm_cardv3.png";
import vector4 from "@/../public/steps-section/sm_cardv4.png";
import { Heart } from "lucide-react";

function TravelCard() {
  return (
    <div className='hidden lg:flex flex-col justify-center shadow dark:shadow-gray-800 relative hover:scale-104 transition'>
      <div className=''>
        <Image
          src={traveller}
          height={350}
          width={350}
          alt='traveller in an ancient temple'
          placeholder='blur'
          className='object-cover rounded-t-2xl'
        />
        {/* <small className="text-blue-300">
          <a href='https://therunawaychick.com/your-guide-to-exploring-hampi'>
            Image Credits
          </a>
        </small> */}
        <div className='flex flex-col p-4'>
          <h1 className='text-blue-950 dark:text-blue-200 text-lg font-bold'>
            Trip To Hampi
          </h1>
          <p className='text-[#5E6282] text-md'>14-16 June | by Sandhya R</p>
        </div>
        <div className='flex gap-6 ml-10'>
          <div className='dark:bg-gray-600 bg-gray-200 p-2 rounded-full'>
            <Image
              src={vector1}
              width={16}
              height={16}
              alt='leaf'
              placeholder='empty'
            />
          </div>
          <div className='dark:bg-gray-600 bg-gray-200 p-2 rounded-full'>
            <Image
              src={vector2}
              width={16}
              height={16}
              alt='map'
              placeholder='empty'
            />
          </div>
          <div className='dark:bg-gray-600 bg-gray-200 p-2 rounded-full'>
            <Image
              src={vector3}
              width={16}
              height={16}
              alt='paper-plane'
              placeholder='empty'
            />
          </div>
        </div>
        <div className='flex justify-between items-center ml-10 mt-10 '>
          <div className='flex  gap-3 items-center  text-[#5E6282]'>
            <Image
              src={vector4}
              width={16}
              height={16}
              alt='building'
              placeholder='empty'
            />
            <p>24 people going</p>
          </div>

          <Heart
            width={18}
            height={18}
            className='hover:text-red-400 cursor-pointer mr-3'
          />
        </div>
      </div>
      {/* Small card on top */}
      <div className='shadow-2xl dark:shadow-gray-800 rounded-2xl p-4 max-w-[16rem] absolute bottom-15 right-[-100] bg-white dark:bg-gray-900'>
        <div className='flex'>
          <Image
            src={hampi}
            height={40}
            width={40}
            alt='Hampi-icon'
            className='rounded-full object-cover'
            placeholder='blur'
          />
          <div className='flex flex-col  items-center pl-4'>
            <small className='text-[#5E6282]'>Ongoing</small>
            <h3 className='font-bold '>Trip to Hampi</h3>
          </div>
        </div>
        <div className='pl-14'>
          <small className='text-blue-400'>
            40% <strong className='text-[#5E6282]'>completed</strong>
            <div
              className='flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700'
              role='progressbar'
            >
              <div className='flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500 w-12'></div>
            </div>
          </small>
          <span className='w-15 h-2 bg-blue-400' />
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
