import Link from 'next/link'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 sm:gris-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h3 className='text-lg font-bold text-white mb-3'>About Us</h3>
                <p>Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.</p>
            </div>
            <div>
                <h3 className='text-lg font-bold text-white mb-3'>Quick Links</h3>
                <div className='flex flex-col'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/courses">Courses</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-bold text-white mb-3'>Follow Us</h3>
                <div className='flex space-x-3'>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Twitter</Link>
                    <Link href="/">Instagram</Link>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-bold text-white mb-3'>Contact Us</h3>
                <div>
                    New Delhi, India
                    Delhi 10001
                    Email: 
                    info@musicschool.com
                    Phone: (123) 456-7890
                </div>
            </div>
        </div>
        <p className='text-center text-sm pt-8'>&copy; 2025 Music School. All rights reserved.</p>
    </footer>
  )
}

export default Footer
