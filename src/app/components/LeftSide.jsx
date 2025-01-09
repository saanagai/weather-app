"use client";
import Input from "./Input";
import { LeftCard } from "./LeftCard";

export const LeftSide = ({ cities }) => {
  return (
    <div className="h-[100%] w-[50%] bg-[#F3F4F6] relative flex items-center justify-center">
      <div className=" z-[99] w-10 h-10 top-0 left-0 ">
        <img src="./orangeMoon.svg" alt="w-[176px] h-[176px]" />
      </div>
      <LeftCard cities={cities} />
    </div>
  );
};
