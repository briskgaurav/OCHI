import React, { useState } from "react";

function Projects() {
  const [box, setBox] = useState([
    {
      img: "https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png",
    },
    {
      img: "https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png",
    },
  ]);

  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=" w-full font-[Founders] ">
      <h1 className="lg:text-9xl text-8xl py-16 px-4 lg:px-16 border-b-[1px] border-zinc-400 font-normal">
        Projects
      </h1>
      <div className="cards w-full p-10 flex flex-wrap gap-5 border-b-[1px] border-zinc-400">
       {box.map((elem,index)=>(
         <div className="container w-full lg:w-[49%] h-[30%] lg:h-[80vh] rounded-2xl overflow-hidden">
         <div className=" relative h-full w-full rounded-xl overflow-hidden hover:scale-[95%] duration-200 ease-linear">
           <img className="h-full w-full object-cover" src={elem.img} alt="" />
           <button className="absolute bottom-[5%] px-4 py-2 text-xs lg:text-base text-white rounded-full font-[NeuMontreal] left-[5%] border-zinc-100 border-[1px]">Design Check</button>
         </div>
       </div>
       ))}
      </div>
    </div>
  );
}

export default Projects;
