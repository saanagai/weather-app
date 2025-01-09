"use client";

import { LeftSide } from "./components/leftSide";
import { RightSide } from "./components/rightSide";
// import { Border } from "./components/Border";
import { MiddleCircle } from "./components/MiddleCircle";
import Input from "./components/Input";
import { useEffect, useState } from "react";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [city, setCity] = useState("Ulaanbaatar");

  async function getRender(city) {
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=52ff2deedf234401b5830818250901&q=${city}`
    );
    const data = await result.json();
  }

  async function getData() {
    const result = await fetch("https://countriesnow.space/api/v0.1/countries");
    const data = await result.json();
    let incomeCities = data.data.map((country) => {
      return country.cities;
    });
    incomeCities = incomeCities.flat();
    setCities(incomeCities);
  }
  useEffect(() => {
    getData();
    getRender();
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    if (search.length === 0) {
      setSearched([]);
    } else {
      const filtred = cities.filter((city) => {
        return city.includes(search);
      });
      setSearched(filtred);
    }
  };

  return (
    <div className="relative flex w-[100vw] h-[100vh] overflow-hidden">
      {/* <Border /> */}
      <div className="flex content-center justify-center">
        <MiddleCircle />
      </div>
      <div>
        <Input
          searchHandler={searchHandler}
          searched={searched}
          setCity={setCity}
        />
      </div>

      <LeftSide cities={cities} />
      <RightSide />

      <div className="absolute">Middle Circle</div>
    </div>
  );
}
