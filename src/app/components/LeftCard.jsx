"use client";
export const LeftCard = () => {
  return (
    <div className=" ">
      <div className=" w-[414px] h-[828px] bg-[#6c95d2] border-2 rounded-lg">
        <p>January 8,2025</p>
        <div className="flex gap-2 text-black justify-center ">
          <h3>Ulaanbaatar</h3>
          <img src="./localization_icon.svg" alt="" />
        </div>
        <div className="flex justify-center mt-48 w-[398px] h-[504px]">
          <img src="./Sun.png" alt="" className="w-[262px] h-[262px]" />
        </div>
        <div className=" flex justify-around  mt-2">
          <img src="./Frame 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};
