"use client";

export function Celsius({ temp }) {
  return (
    <div className="w-[242px] h-[197px]font-extrabold text-9xl text-[#111827] p-8">
      <p>{temp}°</p>
    </div>
  );
}
