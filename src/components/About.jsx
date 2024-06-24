import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full rounded-tl-3xl rounded-tr-3xl bg-[#cdea68] p-20 text-black"
    >
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw]  tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="flex gap-5 w-full border-t-[1px] border-[#a1b562] pt-10 mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl tracking-tight">Our approach:</h1>
          <button className="flex gap-10 items-center mt-6 px-6 py-4 bg-zinc-900 rounded-full uppercase text-white">
            read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full "></div>
          </button>
        </div>
        <div className="w-1/2 h-[62vh] bg-[#b6cf63] rounded-3xl overflow-hidden">
          <img className="w-full h-full" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
