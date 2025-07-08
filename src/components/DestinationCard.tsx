import { destinationType } from "@/util/destination.type";
import {  Navigation,  UserCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

function DestinationCard({ data }: { data: destinationType }) {
  return (
    <div className='col-span-6 hover:scale-105 transition md:col-span-3 lg:col-span-2 mt-10 rounded-4xl lg:shadow-2xl dark:shadow-gray-800 flex flex-col justify-center items-center'>
      <div className='group relative flex flex-col bg-white dark:bg-gray-900 shadow-xl lg:shadow-none max-w-80 rounded-xl'>
        <div className=''>
          <Image
            src={data.picture}
            alt='Gokarna'
            width={300}
            height={400}
            className='object-cover rounded-xl cursor-pointer '
            placeholder='blur'
          />
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex justify-around items-center'>
            <h2 className='font-bold text-[#1E1D4C] dark:text-blue-200'>
              {data.place}
            </h2>
            <h2 className='font-bold text-[#1E1D4C] dark:text-blue-200'>
              {data.price} ₹
            </h2>
          </div>
          <div className='flex justify-around items-center'>
            <p className='inline-flex items-center text-[#5E6282] gap-1'>
              <span>
              <Navigation size={16}/>
              </span>
              <span className='text-md'>{data.days} days</span>
            </p>
            <p className='inline-flex items-center text-[#5E6282] gap-1'>
              <span>
                <UserCheck size={16} />
              </span>
              <span className='text-md'>{data.total_bookings}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;
