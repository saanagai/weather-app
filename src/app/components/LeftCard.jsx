"use client";
export const LeftCard = ({ cities }) => {
  return (
    <div className=" w-[414px] h-[828px] bg-[#eaeef5] border-2 rounded-6xl">
      <div className="w-[398] h-[504] p-2 ">
        <p>January 8,2025</p>
        <div className="flex flex-row gap-2 text-black justify-center tex font-bold text-5xl mt-8 ">
          {/* <h3>{cityName}</h3> */}
          <img src="./localization_icon.svg" alt="" />
        </div>
        <div className="flex justify-center">
          <img src="./Sun.png" alt="" className="w-[262px] h-[262px]" />
        </div>
      </div>
      <div className=" flex justify-center">
        <img src="./Frame 1.png" alt="" />
      </div>
    </div>
  );
};
