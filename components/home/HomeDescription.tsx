"use client"

import { useTypeWriter } from '@/hooks/use-type-writer'
import React, { useDebugValue, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const HomeDescription = () => {
    const [hasLoaded,SetHasLoaded] = useState(false) 
    const description = 
    "I'm 23 years old french Software Engineer. I'm also a versatile person, very comfortable as a Hardware Engineer. Open to work"

    const{ displayedText,isComplete} = useTypeWriter(description,30)

    useEffect(() =>{
        SetHasLoaded(true)
    })
  return (
    <motion.p className="w-auto  md:max-w-[500px] min-h-10 text-white/40 
                        font-thin leading-6" 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1, duration:0.5}}>
        {hasLoaded ? displayedText.split('').map((char,index)=>(
            <motion.span key={index}
                         initial={{color: "rgb(156 163 175"}}
                         animate={{
                            color: isComplete ? "rgb(255 255 255)": "rgb(156 163 175)"
                         }}
                         transition={{duration:0.5, delay: index * 0.03}}
                         >{char}</motion.span>
        )): <span>{description}</span>}
  </motion.p>  )
}

export default HomeDescription