//when we use motion we need to do use client
"use client"

import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

const containerVariants = {
    //opacity : 0 start as invisible 
    hidden : {opcaity: 0},
    visible : {
        opacity: 1,
        //Controls the animation speed and timing.
        transition: {
            //every 0.2 a children come
            staggerChildren : 0.2
        }
    }
}

const itemVariants = {
    //opacity : 0 start as invisible , y:20 Moves the element 20 pixels down from its normal position.
    hidden : {opacity: 0, y: 20},
    // opacity : 1 item become visible , y:0 Moves it to its normal position 
    visible : {opacity:1 , y:0},    
}

const DiscoverSection = () => {
  return (
  <motion.div
  //initial run hidden
  initial="hidden"
  // while in view run visible
  whileInView="visible"
  //when you scoll to it it starting showing with the animation , thats what amount is did for
  //Ensures the animation only runs once per page load (viewport)
  viewport={{once:true,amount:0.8}}
  variants={containerVariants}
  className='py-12 bg-white mb-16'
  >
    {/* Tailwind applies different padding at different screen sizes */}
  <div className='max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16'>
   <motion.div
   variants={itemVariants}
   className='my-12 text-center'
   >
     <h2 className='text-3xl font-semibold leading-tight text-gray-800 '>
        Discover 
     </h2>
     <p className='mt-4 text-lg text-gray-600'>
        Find your Dream Rental Property Today
     </p>
     <p className='mt-2 text-gray-500 max-w-3xl mx-auto'>
       Searching for you dream rental property has never been easier. With our user-friendly search feature
       you can quickly find the perfect home that meets all your needs. Start your search and discover your dream rental property!
     </p>
   </motion.div>
   <div className='grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16'>
    {[
        {
            imageSrc : "/landing-icon-wand.png",
            title : "Search for properties",
            description : 
             "Browse through our extensive collection of rental properties in your desired location."
        },
        {
            imageSrc : "/landing-icon-calendar.png",
            title : "Book your rental",
            description : 
             "Once you've found the perfect rental property , easily book it online with just a few click"
        },
        {
            imageSrc : "/landing-icon-heart.png",
            title : "Enjoy your new Home",
            description : 
             "Move into your new rental property and start enjoying your dream home..."
        }
    ].map((card,index) => (
        <motion.div key={index} variants={itemVariants}>
         <DiscoverCard {...card}/>
        </motion.div>
    ))}
   </div>
  </div>
  </motion.div>
  );
};

const DiscoverCard = ({
    //url of the image to display
    imageSrc,
    title,
    description,
}:{
    imageSrc : string;
    title : string;
    description : string,
}) => (
    <div className='px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72 text-center'>
        <div className='bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto'>
           <Image 
           src={imageSrc}
           width={400}
           height={400}
           className='w-full h-full'
           alt={title} />
        </div>
        <h3 className='mt-4 text-xl font-medium text-gray-800'>{title}</h3>
        <p className='mt-2 text-base text-gray-500'>{description}</p>
        
    </div>
)


export default DiscoverSection;