"use client";

import { RightCard } from "./RightCard";

export const RightSection = ({ cities, night, feelNight, date }) => {
  return (
    <div className="h-full w-1/2 bg-[#0F141E] flex items-center justify-center">
      <RightCard
        cities={cities}
        night={night}
        feelNight={feelNight}
        date={date}
      />
    </div>
  );
};
