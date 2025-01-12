"use client";
import Input from "./Input";
import { LeftCard } from "./LeftCard";

export const LeftSide = ({ cities, temp, feelDay, date }) => {
  return (
    <div className="absolute h-[100%] w-[50%] bg-[#F3F4F6] flex items-center justify-center">
      <LeftCard cities={cities} temp={temp} feelDay={feelDay} date={date} />
    </div>
  );
};
