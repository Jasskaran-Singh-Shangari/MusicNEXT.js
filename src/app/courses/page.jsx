"use client"

import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from 'next/image';
import Course_Data from "@/data/music-courses.json"
import Link from 'next/link';


const coursesPage = () => {

  return (
    <div className='min-h-screen w-full bg-black py-12 pt-36'>
      <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white'>All Courses ({Course_Data.courses.length})</h1>
        <div className="flex flex-wrap justify-center">
        {Course_Data.courses.map((course)=>(
        <CardContainer key={course.id} className="inter-var m-4">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                {course.title}
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                <Image
                    src={course.image}
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={course.slug}
                />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                    {course.price} $
                </CardItem>
                <Link href={`/courses/${course.slug}`}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold pointer-cursor"
                >
                    Sign up
                </CardItem>
                </Link>
                </div>
            </CardBody>
        </CardContainer>
        ))}
      </div>
    </div>
  )
}

export default coursesPage
