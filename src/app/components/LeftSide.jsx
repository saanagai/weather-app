"use client";
import Input from "./Input";
import { LeftCard } from "./LeftCard";

export const LeftSide = ({ cities }) => {
  return (
    <div className="h-[100%] w-[50%] bg-[#F3F4F6] relative flex items-center justify-center">
      <div className="absolute z-[99] w-10 h-10 top-0 left-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="176"
          height="176"
          viewBox="0 0 176 176"
          fill="none"
        >
          <circle cx="88" cy="88" r="88" fill="#FF8E27" />
          <circle
            cx="88"
            cy="88"
            r="88"
            fill="url(#paint0_radial_202_248)"
            fillOpacity="0.35"
            // style="mix-blend-mode:overlay"
          />
          <defs>
            <radialGradient
              id="paint0_radial_202_248"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(88 88) rotate(90) scale(88)"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <LeftCard cities={cities} />
    </div>
  );
};
