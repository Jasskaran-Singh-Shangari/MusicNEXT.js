"use client"

import React, { useState } from 'react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { Button } from '@/components/ui/moving-border'
import { ToastContainer, toast } from 'react-toastify';


const ContactPage = () => {
    const [email, setEmail]=useState("")
    const [message, setMessage]=useState("")
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData(e.currentTarget);
        console.log("email", email)
        console.log("message", message)

        toast.success("Message Sent")
        setEmail("")
        setMessage("") 
    }

  return (
    <div className="relative py-12 pt-36 min-h-screen w-full bg-black">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className='flex flex-col items-center justify-center'>
            <h1 className="relative z-10 text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
            Contact Us
        </h1>
        <p className='relative text-center mt-4 text-lg text-neutral-500 max-w-lg'>
            We&apos;re here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey. 
        </p>
        </div>

        <form onSubmit={handleSubmit}  className='space-y-4 mt-10 flex flex-col items-center justify-center w-full'>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address - xyz@example.com"
            className="rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500 w-[80%] p-4 bg-transparent placeholder:text-neutral-600 z-20"
            required
          />
          <textarea
          name="message" 
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder={"Your Message"}
          rows={7}
          className="rounded-lg border border-neutral-500 focus:ring-2 focus:ring-teal-500 w-[70%] p-4 bg-transparent placeholder:text-neutral-600 z-20"
          required></textarea>
          <Button
          borderRadius='2rem' 
          type="submit"
          className={"font-extrabold z-50 cursor-pointer"}>
            Send
          </Button>
          {/* <button type='submit' className='px-4 py-2 rounded-3xl border border-white z-50 cursor-pointer'>Submit</button> */}

        </form>
        <ToastContainer />
</div>
  )
}

export default ContactPage;
