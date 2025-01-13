"use client";
import { useEffect, useState } from "react";

export default function Input({ searchHandler, searched, getCityName, empty }) {
  return (
    <div className="absolute  left-10 z-[999] mt-[120px] ml-[100px]">
      <div className="flex gap-4 rounded-full text-black bg-[#fff] w-[567px] p-4 z-[100]">
        <img src="./search.svg" alt="" />
        <input
          type="text"
          placeholder="Search"
          onChange={searchHandler}
          value={empty}
        />
      </div>
      {searched.length && (
        <div className="bg-white text-black w-[567px] mt-4 z-30 rounded-2xl p-6 font-bold">
          {searched.slice(0, 3).map((city) => (
            <div className="flex" onClick={() => getCityName(city)}>
              <img src="./search.svg" alt="" />
              <p
                onClick={() => {
                  getCityName(city);
                  searched([]);
                }}
              >
                {city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
