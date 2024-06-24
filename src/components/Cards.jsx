import React from "react";

const Cards = () => {
  const data = []
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center gap-5 px-20">
      <div className="cardcontainer h-[55vh] w-1/2">
        <div className="card relative rounded-xl w-full h-full bg-[#004d43] flex justify-center items-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-4 py-1 border-[#cdea68] text-[#cdea68] rounded-full border-[1px] left-10 bottom-10">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="cardcontainer h-[55vh] flex gap-5 w-1/2">
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute uppercase text-sm px-4 py-1 rounded-full border-[1px] left-8 bottom-10">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#192826]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute uppercase text-sm px-4 py-1 rounded-full border-[1px] left-8 bottom-10">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
