"use client"

import React from 'react'
import Container from './container'
import { delay, motion } from 'framer-motion'
import { cn } from '@/lib/utils';

interface Props{
    children: React.ReactNode;
    className?: string;
}

const PageLayout = ({children,className}: Props) => {
  return (
    <Container className={cn("w-full",className)}>
        <motion.div initial={{opacity:0}}
                    animate={{opacity:1,
                    transition:{delay:1.3,duration:0.3, ease:"easeIn"},}}>
            {children}
        </motion.div>
    </Container>    
)
}

export default PageLayout