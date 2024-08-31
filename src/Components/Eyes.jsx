/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import Pupils from "./Pupils";

function Eyes() {
  return (
    <div className="eyes w-full lg:h-screen h-[80vh] overflow-hidden bg-[#f6f6f6]">
      <div data-scroll data-scroll-speed="-.5" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10">
          <Pupils />
        </div>
      </div>
    </div>
  );
}

export default Eyes;
