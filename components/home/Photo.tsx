"use client"
import React from 'react'
import profile from '@/public/home/profile.webp'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'

const Photo = () => {
  return (
    <div className='w-full h-full flex items-center justify-center '>
        <motion.div initial={{opacity:0}} animate={{opacity:1,
            transition:{delay:2,duration:0.4,ease:"easeIn"}}} className='relative'>
            <motion.div  initial={{opacity:0}} animate={{opacity:1,
            transition:{delay:2.4,duration:0.4,ease:"easeInOut"}}}
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <div className='w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] mix-blend-lighten
                overflow-auto rounded-full'>
                    <Image src={profile} alt="Alexandre BOURDOIS" width={400} height={400} 
                    quality={100} className='object-contain w-full h-full ' priority/>
                </div>
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Photo