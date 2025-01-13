"use client";

export function Celsius({ temp }) {
  return (
    <div className=" flex justify-center items-center w-[318px] h-[165px] -my-10 bg-clip-text text-transparent bg-gradient-to-r from-[#111827] to-[#6B7280]">
      <p className="font-[800] text-[110px] bg-clip-text text-transparent bg-gradient-to-r from-[#111827] to-[#6B7280]">
        {temp}°
      </p>
    </div>
  );
}
