// @ts-nocheck
import React from "react";
import soundbox from "../../images/card/soundbox.png";

const Card = () => {
  return (
    <div className="h-auto  my-4 mx-2 grid grid-cols-3 gap-6 justify-between  ">
      <div className="  bg-gradient-to-tr from-purple-500 to-indigo-700 rounded-md p-4  ">
        <img
          className="w-1/3 mx-auto duration-300 ease-in drop-shadow-2xl"
          src={soundbox}
          alt=""
        />
        <div className="flex justify-between">
          <div className=" w-auto  ">
            <div className=" text-xl font-[Roboto] text-white  mt-[44px] mb-0.5">
              Consoles
              <div className="bg-yellow-400 duration-500 ease-in p-1"></div>
            </div>
          </div>
          <div className="justify-center ">
            <div className="text-medium font-semibold font-[Roboto] text-white pl-8 ">
              BUY 2 GET 1
            </div>
            <div className="text-6xl font-[Roboto]   text-cyan-400 font-bold ">
              free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
