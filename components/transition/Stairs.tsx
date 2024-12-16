import React from 'react'
import { animate, motion } from 'framer-motion'

const Stairs = () => {
    const stairAnimation={
        initial: {
            top:"0%",
        },
        animate:{
            top:"100%",
        },
        exit:{
            top: ["100%", "0%"],
        },
    };

    const reverseIndex= (index:number)=>{
        const totalSteps=8;
        return totalSteps-index-1;
    }
  return (
    <>
        {[...Array(8)].map((_,index)=>(
            <motion.div key={index} variants={stairAnimation} initial="initial" animate="animate" exit='exit'
                transition={{
                    duration:0.3,
                    ease: 'easeInOut',
                    delay: reverseIndex(index) * 0.1,
                }}
                className='w-full h-full bg-white relative'>

            </motion.div>
        ))}   
    </>
  )
}

export default Stairs