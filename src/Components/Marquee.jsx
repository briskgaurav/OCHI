import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".001" className='w-full py-10 lg:py-20 flex items-center overflow-x-hidden text-white bg-[#004D43] font-[Founders] rounded-tl-md rounded-tr-md lg:rounded-tl-xl lg:rounded-tr-xl '>
        <div className=' flex items-center flex-shrink-0 border-t-[1px] leading-[15vw] lg:pb-10 pb-6 pt-4 lg:pt-0  border-b-[1px] border-zinc-100 text-[25vw] font-bold '>
          {["WE ARE OCHI", "WE ARE OCHI","WE ARE OCHI","WE ARE OCHI"].map((elem,index)=>(
            <motion.h1  initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:20, repeat:Infinity}} className='pr-10' >WE ARE OCHI</motion.h1>

          ))}
          
        </div>

    </div>
  )
}

export default Marquee