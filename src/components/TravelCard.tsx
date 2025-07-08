import Image from "next/image";
import React from "react";
import traveller from "@/../public/traveller.png";
import hampi from "@/../public/top-destinations/hampi.jpg";
function TravelCard() {
  return (
    <div className='hidden lg:flex flex-col justify-center shadow dark:shadow-gray-800 border relative'>
      <div className=''>
        <Image
          src={traveller}
          height={350}
          width={350}
          alt='traveller in an ancient temple'
          placeholder='blur'
          className='object-cover rounded-t-2xl'
        />
        <div>
          <h1>Trip To Hampi</h1>
          <span>14-16 June | by Sandhya R</span>
        </div>
      </div>
      {/* Small card on top */}
      <div className='shadow-lg rounded-2xl p-4 max-w-[16rem] absolute bottom-0 right-[-100] bg-white '>
        <div className='flex'>
          <Image
            src={hampi}
            height={40}
            width={40}
            alt='Hampi-icon'
            className='rounded-full object-cover'
          />
          <div className="">
            <small>Ongoing</small>
            <h3 className='font-bold '>Trip to Hampi</h3>
          </div>
        </div>
        <div>
          <small>
            40% <strong>completed</strong>
          </small>
          <span className='w-15 h-2 bg-blue-400' />
        </div>
      </div>
    </div>
  );
}

export default TravelCard;
