"use client";

import { Celsius } from "./Celsius";

export const RightCard = ({ cities, night, feelNight, date }) => {
  function changeWeatherIcon(feelNight) {
    const condition = feelNight.toLowerCase();

    switch (true) {
      case condition.includes("clear"):
        return "moon.png";
      case condition.includes("rain"):
        return "N-CloudsRain.png";
      case condition.includes("cloudy"):
        return "N-Clouds.png";
      case condition.includes("wind"):
        return "N-Wind.png";
      case condition.includes("snow"):
        return "N-SnowClouds.png";
      case condition.includes("thunder"):
        return "N-SnowZ.png";
    }
  }
  return (
    <div className="z-10 w-[414px] h-[828px] bg-[#1F2937]/80 rounded-[48px] shadow-lg z-20">
      <div className="w-[414] h-[514] px-10 py-14 ">
        <p className="text-[#6B7280]">{date}</p>
        <div className="flex flex-row text-white justify-between font-bold text-5xl mt-8 ">
          <h3>{cities.split(",")[0]}</h3>
          <img src="./localization_icon.svg" alt="" />
        </div>

        <div className="flex justify-center">
          <img
            src={changeWeatherIcon(feelNight)}
            alt=""
            className="w-[262px] h-[262px] mt-12"
          />
        </div>
      </div>
      <div className="flex flex-col px-12 w-[318px] h-[269px] bg-clip-text text-transparent bg-gradient-to-r from-[#F9FAFB] to-[#1e1f21]">
        <Celsius temp={night} />

        <p className="text-[orange] font-bold text-base mt-5">{feelNight}</p>

        <div className="flex items-center w-[318px] h-[269px] -my-10">
          <img src="./Frame 1.png" alt="" />
        </div>
      </div>
      <div className="z-0 flex justify-between absolute overflow-hidden   ml-[350px] ">
        <img src="./Ellipse.svg" alt="w-[176px] h-[176px]" />
      </div>
    </div>
  );
};
