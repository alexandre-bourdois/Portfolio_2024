"use client"

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';

interface Props{
    children: React.ReactNode;
    className?: string;
}

const PageTransition = ({children}: Props) => {
    const pathname = usePathname();
  return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div initial={{opacity:1}} 
                        animate={{opacity:0, 
                        transition:{delay:0.7, duration:0.4, ease: "easeInOut"},}}  
                        className='h-screen w-screen fixed bg-bodyColor top-0 
                        pointer-events-none'>
            </motion.div>
            {children}
        </div>
    </AnimatePresence>
  )
}

export default PageTransition