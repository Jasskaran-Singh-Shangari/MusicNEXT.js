import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
  return (
    <div className='h-auto md:h-[40rem] relative w-full flex flex-col items-center justify-center rounded-md overflow-hidden mx-auto md:py-0 py-10'>
        <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
        />
        <div className='p- relative z-10 w-full text-center'>
        <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text'>Master the art of music</h1>
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.
        </p>

        <div className='mt-4'>
            <Link href="/courses">
                <Button
                borderRadius="2rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                    Explore courses
                </Button>
            </Link>
            
        </div>
      </div>
    </div>
  )
}

export default HeroSection
