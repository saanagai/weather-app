"use client";

import { Celsius } from "./Celsius";

export const LeftCard = ({ cities, temp, feelDay, date }) => {
  return (
    <div className=" absolute w-[414px] h-[828px] text-transparent rounded-[48px] shadow-lg ">
      <div className="w-[414px] h-[514px]  px-10 py-14 ">
        <p className="text-[#6B7280]">{date}</p>
        <div className="flex flex-row text-black justify-between font-bold text-5xl ">
          <h3>{cities}</h3>
          <img src="./localization_icon.svg" alt="" />
        </div>
        <div className="flex justify-center ">
          <img src="./Sun.png" alt="" className="w-[262px] h-[262px] mt-12" />
        </div>
      </div>
      <div className="flex flex-col px-12 w-[318px] h-[269px]">
        <Celsius temp={temp} />

        <p className="text-[#000000] font-bold text-base mt-5">{feelDay}</p>
        <div className=" flex items-center w-[318px] h-[269px] -my-10">
          <img src="./Frame 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
