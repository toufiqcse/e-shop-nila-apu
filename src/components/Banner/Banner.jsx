// @ts-nocheck
import React from "react";
import tv from "../../images/tv.png";

const Banner = () => {
  return (
    <div className=" m-2 ">
      <div className="relative flex flex-wrap overflow-hidden   w-full h-96 bg-gradient-to-r from-blue-700 to-purple-500 ">
        <div className="absolute top-20 left-48">
          <span className="text-4xl font-[Roboto] font-bold text-cyan-300">
            Huge Savings
          </span>
          <span className="text-4xl font-[Roboto] font-bold text-white mx-2">
            on
          </span>

          <p className="text-5xl font-[Roboto] font-bold text-gray-100 pt-1">
            UHD Televisions
          </p>
          <p className="font-[Roboto] pt-3 text-white text-medium ">
            Sale up to 70% off on selected items*
          </p>
          {/*shop button  */}
          <button className="outline-none border-2 rounded-full py-2 px-6 font-[Roboto] text-white mt-6 mx-1 hover:bg-violet-600 active:bg-violet-600 duration-300 ease-in">
            Shop Now
          </button>
        </div>
        <div className="absolute  top-5 right-64 w-1/4 lg:w-[25rem] z-10">
          <img className="drop-shadow-2xl " src={tv} alt="" />
          {/* For backdrop icon */}
          <div className=" absolute w-3.5 bg-gradient-to-t from-violet-700 to-blue-600 top-[-93px] md:right-[-5rem]  z-[-1] p-28 rounded-full drop-shadow-2xl duration-500 ease-in"></div>
          <div
            className=" absolute w-[23rem]  md:w-[21rem] lg:w-[23rem] bg-gradient-to-b from-violet-700 to-blue-600 top-[16rem] md:top-[15rem] 
          right-[10rem] md:right-[4rem] lg:right-[5rem] lg:top-[17.5rem] z-10 p-28 rounded-t-lg drop-shadow-2xl origin-bottom-left rotate-[10deg] translate-x-4 duration-500 ease-in   "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
