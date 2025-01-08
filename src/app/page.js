"use client";

import { LeftSide } from "./components/leftSide";
import { RightSide } from "./components/rightSide";
// import { Border } from "./components/Border";
import { MiddleCircle } from "./components/MiddleCircle";
import Input from "./components/Input";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh] overflow-hidden">
      {/* <Border /> */}
      <div className="flex content-center justify-center">
        <MiddleCircle />
      </div>
      <div></div>
      <Input />
      <LeftSide />
      <RightSide />

      <div className="absolute">Middle Circle</div>
    </div>
  );
}
