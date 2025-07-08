import React from "react";
import bgVectorSm from "@/../public/category-vectors/bg_rectangle_sm.png";
import bgVector from "@/../public/category-vectors/bg_rectangle.png";
import { categoryType } from "@/util/category.type";
import Image from "next/image";

function CategoryCard({ data }: { data: categoryType }) {
  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1 rounded-4xl lg:shadow dark:shadow-gray-800 flex justify-center items-center'>
      <div className='group relative flex flex-col shadow lg:shadow-none bg-white dark:bg-gray-900 hover:shadow-2xl dark:hover:shadow-gray-800 cursor-pointer max-w-80 p-4 '>
        {/* Card header */}
        <div className='flex items-center justify-center min-h-28 relative lg:min-h-40'>
          <Image
            src={data.vector}
            placeholder='empty'
            alt='vector-image'
            height={140}
            width={140}
            className='relative z-1'
          />
          <Image
            src={bgVectorSm}
            alt='bg-vector'
            height={40}
            width={40}
            placeholder='empty'
            className=' absolute bottom-10 right-25 z-0 '
          />
        </div>
        {/* Card Details */}
        <div className='text-center'>
          <h1 className='text-xl font-bold text-[#1E1D4C] dark:text-blue-200'>
            {data.heading}
          </h1>
          <h3 className='text-md text-[#5E6282]'>{data.description}</h3>
        </div>
        {/* Card hover effect */}
        <Image
          src={bgVector}
          alt='bg-vector'
          height={60}
          width={60}
          placeholder='empty'
          className='hidden group-hover:block absolute bottom-[-20] left-[-10] z-[-1]'
        />
      </div>
    </div>
  );
}

export default CategoryCard;
