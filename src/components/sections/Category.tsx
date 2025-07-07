import React from "react";
import dots_vector from "@/../public/dots.png";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import vector1 from "@/../public/category-vectors/vector_1.png";
import vector2 from "@/../public/category-vectors/vector_2.png";
import vector3 from "@/../public/category-vectors/vector_3.png";
import vector4 from "@/../public/category-vectors/vector_4.png";

const categoryData = [
  {
    id:1,
    vector:vector1,
    heading: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it."
  },
  {
    id:2,
    vector:vector2,
    heading: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the."
  },
  {
    id:3,
    vector:vector3,
    heading: "Local Events",
    description: "Barton vanity itself do in it. Preferd to men it engrossed listening. ."
  },
  {
    id:4,
    vector:vector4,
    heading: "Customization",
    description: "We deliver outsourced aviation services for military customers"
  }
]

function Category() {
  return (
    <section className="mt-15 mx-5 lg:mx-10">
      <div className="relative text-center">
        <Image
          src={dots_vector}
          className='absolute top-0 right-5 lg:right-10 dark:opacity-15 dark:lg:opacity-80 z-[-10] '
          height={120}
          width={120}
          alt='dots-vector'
          placeholder='empty'
        />
        <p className='text-blue-800 dark:text-blue-100 font-thin text-lg'>
          CATEGORY
        </p>
        <h1 className='text-blue-950 dark:text-blue-200 text-5xl font-serif font-bold'>
          We Offer Best Services
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-3 mt-10">
        {categoryData.map((item)=>{
          return <CategoryCard data={item} key={item.id}/>
        })}
      </div>
    </section>
  );
}

export default Category;
