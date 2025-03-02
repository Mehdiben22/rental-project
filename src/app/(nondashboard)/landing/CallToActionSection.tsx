//mention use client when you will use motion
"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import Link from 'next/link'

const CallToActionSection = () => {
  return (

    //relative is mentionned because any time you have an image and want to put something on the top of the image
    //for exemple a text then you set the parent container to be relative
    <div className='relative py-24'>
        <Image
        src="/landing-call-to-action.jpg"
        alt='Rentiful Search Section Background'
        fill
        className='object-cover object-center'
        />
        <div className='absolute inset-0 bg-black bg-opacity-60'></div>
        <motion.div
        //opacity : 0 start as invisible , y:20 Moves the element 20 pixels down from its normal position.
        initial={{opacity:0 , y:20}}
        //Controls the animation speed and timing.
        transition={{duration: 0.5}}
        // while in view run visible
        whileInView={{opacity:1, y:0}}
        //Ensures the animation only runs once per page load.
        viewport={{once : true }}
        className='relative max-w-4xl xl:max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12'
        >
            <div className='flex flex-col md:flex-row justify-between items-center'>
             <div className='mb-6 md:mb-0 md:mr-10'>
               <h2 className='text-2xl font-bold text-white'>
                    Find your Dream rental Property
               </h2>
             </div>
             <div>
                <p className='text-white mb-3'>
                  Discover a wide range of rental properties in your desired location.
                </p>
                <div className='flex justify-center md:justify-start gap-4'>
                    {/* scrolling to the search section into the top of the page */}
                   <button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
                    className='inline-block text-primary-700 bg-white rounded-lg px-6 py-3 font-semibold hover:bg-primary-500 hover:text-primary-50'
                    >
                    Search
                   </button>
                   <Link 
                   href="/signup"
                   className='inline-block text-white bg-secondary-500 rounded-lg px-6 py-3 font-semibold hover:bg-secondary-600'
                   scroll={false}
                   >
                   SignUp
                   </Link>
                </div>
             </div>
            </div>

        </motion.div>
    </div>
  )
}

export default CallToActionSection