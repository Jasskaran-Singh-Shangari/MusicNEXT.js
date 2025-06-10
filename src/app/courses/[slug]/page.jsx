"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import courseData from "@/data/music-courses.json"
import Image from 'next/image'

const SlugPage = () => {

    const {slug}=useParams();
    const course=courseData.courses.filter((c)=>c.slug===slug)[0]

  return (
      <div className='w-full min-h-screen flex flex-col items-center pb-10'>
        <div className='rounded-b-4xl border-b border-white w-full pb-100 md:pb-100 lg:pb-100 bg-gradient-to-b from-black to-white shadow-white shadow-lg'>
          <h1 className='text-2xl py-4 pt-36 text-center sm:text-3xl md:text-5xl lg:text-7xl font-bold'>Welcome to the Course <span className='whitespace-nowrap'>{course.title}</span></h1>
        <p className='text-center text-md md:text-xl mt-2 text-neutral-300'>{course.description}</p>
        </div>

        <div className='w-[80%] -mt-100 z-20 flex flex-col items-center'>
        <Image className='mt-10 rounded-4xl'
          src={course.image}
          width={900}
          height={800}
          alt={course.slug}
        />
        </div>
          
        <div className='my-15 text-center'>
          <h2 className='text-3xl'>{course.topic1} </h2>
          <p className='max-w-xl mt-10 text-lg mx-5'>{course.content1} </p>
        </div>
        <div className='my-15 text-center'>
          <h2 className='text-3xl'>{course.topic2} </h2>
          <p className='max-w-xl mt-10 text-lg mx-5'>{course.content2} </p>
        </div>
        <div className='my-15 text-center'>
          <h2 className='text-3xl'>{course.topic3} </h2>
          <p className='max-w-xl mt-10 text-lg mx-5'>{course.content3} </p>
        </div>

      </div>
  )
}

export default SlugPage;
