"use client";

export function Celsius({ temp }) {
  return (
    <div className="w-[318px] h-[165px] -my-10">
      <p className="font-[800] text-[110px] text-[#bfbfc85c] ">{temp}°</p>
    </div>
  );
}
