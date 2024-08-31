import React, { useEffect, useState } from "react";
import Pupils from "./Pupils";
import Button from "./Button";

function ReadyToStart() {
  

  return (

    <>
   
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="lg:h-[120vh] h-[80vh] text-center bg-[#CDEA68] flex items-center justify-center px-10 lg:py-32 lg:px-44">
      <h1 className="text-[30vw] lg:text-[17vw] text-[#212121] font-bold font-[Founders] leading-[20vw] lg:leading-[12vw]">READY TO START A NEW PROJECT?</h1>
      <div className="absolute  flex justify-center gap-5 w-full">
        <Pupils/>
      </div>
    </div>
    </>
  );
}

export default ReadyToStart;
