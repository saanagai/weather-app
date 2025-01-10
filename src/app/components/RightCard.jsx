"use client";

import { Celsius } from "./Celsius";

export const RightCard = ({ cities, night, feelNight, date }) => {
  return (
    <div className=" w-[414px] h-[828px] bg-[#989999] border-2 rounded-6xl">
      <div className="w-[398] h-[504] p-2 ">
        <p className="text-white">{date}</p>
        <div className="flex flex-row gap-2 text-white justify-center tex font-bold text-5xl mt-8 ">
          <h3>{cities}</h3>
          <img src="./localization_icon.svg" alt="" />
        </div>
        <div className="flex justify-center">
          <img src="./moon.png" alt="" className="w-[262px] h-[262px]" />
        </div>
      </div>
      <div className=" flex  gap-10 flex-col p-4">
        <p className="text-[#777CCE] font-bold">{feelNight}</p>
        <img src="./Frame 1.png" alt="" />
      </div>
      <Celsius temp={night} />
    </div>
  );
};
