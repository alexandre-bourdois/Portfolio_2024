import React from 'react'
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SuccessMessage = ({status}:{status:string}) => {
  return (
    <motion.div
        initial={{y:40, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:0.5, delay:0.2}}
        className='flex flex-col items-center justify-center gap-3 py-6'>
        <div className='border-2 border-lightSky w-20 h-20 rounded-full items-center justify-center flex text-lightSky'>
            <Check className='w-12 h-12'/>
        </div>
        <h2 className='text-4xl leading-none font-extrabold'>Thank You!</h2>
        <p>{status}</p>
    </motion.div>
  )
}

export default SuccessMessage