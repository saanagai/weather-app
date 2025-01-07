"use client";

import { LeftSide } from "./components/leftSide";
import { RightSide } from "./components/rightSide";
// import { Border } from "./components/Border";
import { MiddleCircle } from "./components/MiddleCircle";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      {/* <Border /> */}
      <div className="flex content-center justify-center">
        <MiddleCircle />
      </div>
      <div>
        <div className="absolute flex gap-4 rounded-full text-black bg-[#fff] mt-6 w-[567px] p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <g opacity="0.2">
              <path
                d="M31.51 28.51H29.93L29.37 27.97C31.33 25.69 32.51 22.73 32.51 19.51C32.51 12.33 26.69 6.51001 19.51 6.51001C12.33 6.51001 6.51001 12.33 6.51001 19.51C6.51001 26.69 12.33 32.51 19.51 32.51C22.73 32.51 25.69 31.33 27.97 29.37L28.51 29.93V31.51L38.51 41.49L41.49 38.51L31.51 28.51ZM19.51 28.51C14.53 28.51 10.51 24.49 10.51 19.51C10.51 14.53 14.53 10.51 19.51 10.51C24.49 10.51 28.51 14.53 28.51 19.51C28.51 24.49 24.49 28.51 19.51 28.51Z"
                fill="black"
              />
            </g>
          </svg>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <LeftSide />
      <RightSide />

      <div className="absolute">Middle Circle</div>
    </div>
  );
}
