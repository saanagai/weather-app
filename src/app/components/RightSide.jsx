"use client";

import { RightCard } from "./RightCard";

export const RightSide = () => {
  return (
    <div className="h-[100%] w-[50%] bg-[#0F141E]  relative flex items-center justify-center">
      right side
      <div className="absolute z-[99] w-10 h-10 top-0 left-0"></div>
      <RightCard />
    </div>
  );
};
