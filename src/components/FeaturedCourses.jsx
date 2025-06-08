"use client"

import React from 'react'
import Course_Data from "../data/music-courses.json"
import { Button } from './ui/moving-border'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'


const FeaturedCourses = () => {

    const featuredCourses = Course_Data.courses.filter( (course) => course.isFeatured)

  return (
    <div className='py-12 bg-gray-900'>
      <div>
        <div className='text-center'>
            <h2 className='uppercase text-teal-600 text-base font-semibold tracking-wide'>FEATURED COURSES</h2>
            <p className='mt-2 text-3xl text-white sm:text-4xl font-extrabold tracking-tight leading-8'>Learn with the Best</p>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            {featuredCourses.map((course)=> (
            <div key={course.id} className="flex justify-center">
                <BackgroundGradient className={"rounded-[22px] max-w-sm flex flex-col h-full overflow-hidden bg-white dark:bg-zinc-900"}> 
                    <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{course.title}</p>
                        <p className='text-sm sm:text-xl text-neutral-600 dark:text-neutral-400 flex-grow text-center'>{course.description}</p>

                        <Link className='bg-white py-2 px-4 border-black border-solid border-2 rounded-full text-black mt-3' href={`/courses/${course.slug}`}>
                            Learn More
                        </Link>
                    </div>
                </BackgroundGradient> 
            </div>
            )) }
        </div>
      </div>
      <div className='mt-20 text-center'>
        <Link href="/courses">
            <Button
                borderRadius='2rem'
                className="bg-white dark:bg-teal-700 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer">
                View All Courses
            </Button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses
