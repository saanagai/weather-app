"use client";

import { Celsius } from "./Celsius";

export const RightCard = ({ cities, night, feelNight, date }) => {
  return (
    <div className=" w-[414px] h-[828px] bg-[#989999] rounded-[48px] shadow-lg z-20">
      <div className="w-[414] h-[514] px-10 py-14 ">
        <p className="text-[#6B7280]">{date}</p>
        <div className="flex flex-row text-white justify-between font-bold text-5xl mt-8 ">
          <h3>{cities}</h3>
          <img src="./localization_icon.svg" alt="" />
        </div>

        <div className="flex justify-center">
          <img src="./moon.png" alt="" className="w-[262px] h-[262px] mt-12" />
        </div>
      </div>
      <div className="flex flex-col px-12 w-[318px] h-[269px]">
        <Celsius temp={night} />

        <p className="text-[orange] font-bold text-base mt-5">{feelNight}</p>

        <div className="flex items-center w-[318px] h-[269px] -my-10">
          <img src="./Frame 1.png" alt="" />
        </div>
      </div>
      <div className="flex justify-between absolute overflow-hidden  z-[99] ">
        <img src="./Ellipse.svg" alt="w-[176px] h-[176px]" />
      </div>
    </div>
  );
};
