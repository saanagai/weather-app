"use client";
import { LeftCard } from "./LeftCard";

export const LeftSide = () => {
  return (
    <div className="h-[100%] w-[50%] bg-[#F3F4F6]">
      <div className="">
        <img src="./Ground 2.png" alt="" />
      </div>
      <div className="w-[414px] h-[828px] bg-[#D1D5DB] rounded[48px]">
        <LeftCard />
      </div>
    </div>
  );
};
