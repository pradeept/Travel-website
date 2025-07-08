import Image from "next/image";
import React from "react";
import spring from "@/../public/top-destinations/sprint_vector.png";
import { destinationType } from "@/util/destination.type";
import pic1 from "@/../public/top-destinations/hampi.jpg";
import pic2 from "@/../public/top-destinations/gokarna.jpg";
import pic3 from "@/../public/top-destinations/mysore.jpg";
import pic4 from "@/../public/top-destinations/badami.jpg";
import pic5 from "@/../public/top-destinations/coorg.jpeg";
import DestinationCard from "../DestinationCard";

const topDestinations: destinationType[] = [
  {
    id: 1,
    picture: pic1,
    place: "Hampi, KA",
    days: 3,
    price: 4000,
    total_bookings: 3000,
  },
  {
    id: 2,
    picture: pic2,
    place: "Gokarna, KA",
    days: 4,
    price: 4500,
    total_bookings: 2800,
  },
  {
    id: 3,
    picture: pic3,
    place: "Mysore, KA",
    days: 4,
    price: 5000,
    total_bookings: 2780,
  },
  {
    id: 4,
    picture: pic4,
    place: "Badami, KA",
    days: 3,
    price: 4000,
    total_bookings: 2700,
  },
  {
    id: 5,
    picture: pic5,
    place: "Coorg, KA",
    days: 4,
    price: 5000,
    total_bookings: 2500,
  },
];

function Selling() {
  return (
    <section className='mx-5 lg:mx-10 mt-15 lg:mt-24'>
      <div className='relative text-center'>
        <Image
          src={spring}
          className='absolute top-15 right-5 lg:right-10 dark:opacity-15 dark:text-gray-200 dark:lg:opacity-80 z-[-10] '
          height={120}
          width={120}
          alt='dots-vector'
          placeholder='empty'
        />
        <p className='text-blue-800 dark:text-blue-100 font-thin text-lg'>
          TOP SELLING
        </p>
        <h1 className='text-blue-950 dark:text-blue-200 text-5xl font-serif font-bold'>
          TOP DESTINATIONS
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-5 mt-10 lg:mx-10"  >
        {topDestinations.map((item) => {
          return <DestinationCard data={item} key={item.id} />;
        })}
      </div>
    </section>
  );
}

export default Selling;
