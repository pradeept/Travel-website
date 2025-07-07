"use client";
import Link from "next/link";
import React, { useState } from "react";
import Toggle from "./Toggle";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Try without using state
    // or make mobile nav only client
    <nav className=' rounded-3xl min-h-14 bg-white text-black dark:bg-slate-900 opacity-90 dark:text-white sticky top-0 z-101'>
      <div className='flex justify-around items-center gap-6 p-4'>
        <div>
          <h1 className='text-3xl'>
            Jad<span className='text-amber-300'>OO</span>
          </h1>
        </div>
        <div className="flex justify-between items-center gap-8">
          <Link href={"/"} className='hover:dark:text-orange-300'>
            Destinations
          </Link>
          <Link href={"/"} className='hover:dark:text-orange-300'>
            Hotels
          </Link>
          <Link href={"/"} className='hover:dark:text-orange-300'>
            Flights
          </Link>
          <Link href={"/"} className='hover:dark:text-orange-300'>
            Bookings
          </Link>
          <Link href={"/"} className='hover:dark:text-orange-300'>
            Login
          </Link>
          <Link href={"/"} className='hover:dark:text-orange-300 border px-0.5'>
            Signup
          </Link>
        </div>

        <div>
          <Toggle className='absolute top-6 right-10' />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
