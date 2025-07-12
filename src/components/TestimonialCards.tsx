"use client";
import { testimonialType } from "@/util/testimonial.type";
import { MoveDown, MoveUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

function TestimonialCard({ data }: { data: testimonialType[] }) {
  const [id, setId] = useState<number>(0);
  return (
    <div className='flex gap-6'>
      <div className='relative shadow dark:shadow-lg dark:shadow-gray-800 p-4 '>
        <Image
          src={data[id].pic}
          width={48}
          height={48}
          placeholder='blur'
          alt='avatar'
          className='absolute top-[-40] left-0 rounded-full'
        />
        <div className='text-[#5E6282] dark:text-[#a7a7aa] flex flex-col'>
          <p className='font-bold'>{data[id].name}</p>
          <small>{data[id].about}</small>
          <motion.p
            className='break-words max-w-xl mt-5 lg:mt-8'
            key={data[id].id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {data[id].quote}
          </motion.p>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <MoveUp
          onClick={() => setId((prev) => (prev + 1) % data.length)}
          className='cursor-pointer hover:opacity-80'
        >
          up
        </MoveUp>
        <MoveDown
          onClick={() =>
            setId((prev) => (prev - 1 + data.length) % data.length)
          }
          className='cursor-pointer hover:opacity-80'
        >
          down
        </MoveDown>
      </div>
    </div>
  );
}

export default TestimonialCard;
