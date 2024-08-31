import { cubicBezier, motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Button from "./Button";

function Home() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className="h-screen pt-24 lg:pt-16 w-full">
      {["We create", "eye-opening", "presentation"].map((elem, index) => (
        <div className="font-[Founders] px-10">
          {index === 1 ? (
            <div className=" relative flex items-center gap-2 lg:gp-1">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "8vw" }}
                transition={{
                  ease: cubicBezier(0.35, 0.17, 0.3, 0.86),
                  duration: 0.8,
                  delay:.5,
                }}
                className="w-[8vw] lg:h-[12vh] h-8 rounded-md lg:rounded-lg relative overflow-hidden -top-[-.5vw]"
              >
                <img className="h-full w-full" src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
              </motion.div>
              <h1 className="lg:text-[9vw] lg:leading-[6.5vw] text-[15vw] leading-[12vw] uppercase text-[#212121]">
                {elem}
              </h1>
            </div>
          ) : (
            <h1 className="lg:text-[9vw] lg:leading-[6.5vw] text-[15vw] leading-[12vw] uppercase text-[#212121]">
              {elem}
            </h1>
          )}
        </div>
      ))}
      <div className="HR pt-16 lg:pt-28 border-b-[1px] border-zinc-400"></div>
      <div className=" px-10 lg:pt-3 pt-20 text-xl font-medium lg:text-base flex lg:items-center flex-col lg:flex-row gap-1 justify-between">
        <h4>For public and private companies</h4>
        <h4>From the first pitch to IPO</h4>
        <span className=" flex items-center gap-1 mt-4 ">
          <Button />
          <span className="p-2 border-[1.5px] border-zinc-900 rounded-full ">
            <MdArrowOutward />
          </span>
        </span>
      </div>
      <motion.h3 initial={{scale:1}} animate={{scale:.9,opacity:1}} transition={{ease:"linear", duration:2,repeat:Infinity}}
        className="absolute lg:relative lg:flex font-extrabold lg:items-center lg:justify-center lg:bottom-0 lg:left-0 bottom-[10%] left-[33%] mt-16 lg:mt-0  text-2xl text-zinc-400 pt-12">
        Scroll Down
      </motion.h3>
    </div>
  );
}

export default Home;
