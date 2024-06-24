import { motion, useAnimation } from "framer-motion";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-24">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-6xl font-['Neue_Montreal']">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#cdea68] overflow-hidden right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none hover:transform{scale(.5)} tracking-tighter font-custom text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde project"
              />
            </div>
            <div className="flex gap-2 items-center mt-5">
              {["Audit", "Copywriting", "sales deck", "slides design"].map(
                (item, index) => (
                  <button
                    key={index}
                    className="px-4 py-1 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#cdea68] left-0 overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter font-custom text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise project"
              />
            </div>
            <div className="flex gap-2 items-center mt-5">
              {["Agency", "Company Presentation"].map((item, index) => (
                <button
                  key={index}
                  className="px-4 py-1 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Featured;