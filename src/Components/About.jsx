import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
     
     <div data-scroll data-scroll-speed="-.01" className=" lg:py-20 w-full rounded-tl-2xl rounded-tr-2xl  font-[NeuMontreal] bg-[#CDEA68] ">
      <div className="lg:h-[50vh] border-b-[1px] p-10 lg:p-16 border-zinc-700">
        <h1 className="lg:w-4/5 w-full text-2xl lg:text-[3.3vw] leading-none font-medium">
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to raise funds, sell prod­ucts, ex­plain{" "}
          <span className="underline">com­plex ideas, and hire great</span>{" "}
          peo­ple.
        </h1>
      </div>

      <div className="w-full lg:h-[80vh] py-10 px-8 lg:px-16 lg:py-20 flex flex-col justify-between gap-5">
        <div className="lg:w-1/2 w-full h-full">
          <h1 className="lg:text-6xl text-2xl pb-2 lg:pb-4">Our approach:</h1>
          <motion.button whileHover={{backgroundColor:"black",scale:1.1}} className="py-4 px-6 lg:px-10 text-white lg:text-lg text-xs rounded-full bg-[#212121]">
            Read More
          </motion.button>
        </div>
        <div className=" overflow-hidden w-full lg:w-1/2 rounded-xl bg-lime-200">
          <img
            className="h-full w-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

  );
}

export default About;
