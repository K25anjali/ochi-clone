import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className=" w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap ">
        {["We are ochi", "We are ochi"].map((item) => (
          <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", duration:"16", repeat:Infinity}} className="text-[20vw] leading-none font-custom font-semibold uppercase tracking-tighter -mb-[2vw] -mt-[2vw] pr-20">
            We are ochi
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
