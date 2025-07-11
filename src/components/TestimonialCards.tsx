"use client";
import { testimonialType } from "@/util/testimonial.type";
import { MoveDown, MoveUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {motion} from "framer-motion";

function TestimonialCard({ data }: { data: testimonialType[] }) {
  const [id, setId] = useState<number>(0);
  return (
    <div className='flex gap-6'>
      <div className='relative shadow p-4 '>
        <Image
          src={data[id].pic}
          width={48}
          height={48}
          placeholder='blur'
          alt='avatar'
          className='absolute top-[-40] left-0 rounded-full'
        />
        <div className='text-[#5E6282] flex flex-col'>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className='font-bold'
          >
            {data[id].name}
          </motion.p>
          <small>{data[id].about}</small>
          <p className='break-words max-w-xl mt-5 lg:mt-8'>{data[id].quote}</p>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <MoveUp
          onClick={() => setId((prev) => (prev + 1) % data.length)}
          className='cursor-pointer'
        >
          up
        </MoveUp>
        <MoveDown
          onClick={() =>
            setId((prev) => (prev - 1 + data.length) % data.length)
          }
          className='cursor-pointer'
        >
          down
        </MoveDown>
      </div>
    </div>
  );
}

export default TestimonialCard;
