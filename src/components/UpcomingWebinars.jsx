import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { Button } from './ui/moving-border';
import Link from 'next/link';


const UpcomingWebinars = () => {
    const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
  return (
    <div className="p-10 bg-gray-900">
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className="text-center">
                <h2 className='text-teal-600 text-xl uppercase font-semibold tracking-wide'>FEATURED WEBINARS</h2>
                <p className='mt-2 leading-8 font-extrabold tracking-tight text-white text-3xl sm:text-4xl'>Enhance your Musical Journey</p>
            </div>
            <div className='mt-10'>
                <div className="max-w-5xl mx-auto px-8">
                    <HoverEffect items={featuredWebinars} />
                </div>
            </div>
            <div className='mt-10 text-center'>
                <Link href="/webinars">
                    <Button
                    borderRadius='2rem'
                    className={"bg-white cursor-pointer dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"}>All Webinars</Button>
                </Link>
            </div>
        </div>

        
      
    </div>
  )
}

export default UpcomingWebinars
