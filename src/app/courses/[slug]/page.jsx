"use client"

import { useParams } from 'next/navigation'
import React from 'react'
import courseData from "@/data/music-courses.json"

const SlugPage = () => {
    const {slug}=useParams();
    const course=courseData.courses.filter((c)=>c.slug===slug)[0]
  return (
    <div className='w-full min-h-screen'>
        <h1 className='text-2xl py-4 pt-36 text-center sm:text-3xl md:text-5xl lg:text-7xl font-bold'>Welcome to the Course {course.title}</h1>

        <p className='text-center text-md md:text-xl mt-2 text-neutral-500'>{course.description}</p>

      
    </div>
  )
}

export default SlugPage
