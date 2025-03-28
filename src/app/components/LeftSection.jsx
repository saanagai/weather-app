"use client";
import { LeftCard } from "./LeftCard";

export const LeftSection = ({ cities, temp, feelDay, date }) => {
  return (
    <div className="h-full w-1/2 bg-[#F3F4F6] flex items-center justify-center">
      <LeftCard cities={cities} temp={temp} feelDay={feelDay} date={date} />
    </div>
  );
};
