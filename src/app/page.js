"use client";

import { MiddleCircle } from "./components/MiddleCircle";
import Input from "./components/Input";
import { useEffect, useState } from "react";
import { RightSection } from "./components/RightSection";
import { LeftSection } from "./components/LeftSection";

export default function Home() {
  const [cities, setCities] = useState([]);
  const [searched, setSearched] = useState([]);
  const [city, setCity] = useState("Ulaanbaatar");
  const [temp, setTemp] = useState("");
  const [night, setNight] = useState([]);
  const [feelDay, setFeelDay] = useState("");
  const [feelNight, setFeelNight] = useState("");
  const [date, setDate] = useState([]);
  const [empty, setEmpty] = useState("");
  // const [loading, setLoading] = useState("");
  // const [dayIcons, setDayIcons] = useState("");
  // city === "Tokyo"
  // setCity("Ulaanbaatar")
  //city ==="Ulaanbaatar"

  async function getRender(city) {
    console.log("tsag agaar avj bn..");
    const result = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=52ff2deedf234401b5830818250901&q=${city}`
    );
    const data = await result.json();
    // console.log(data.forecast.forecastday[0].day.maxtemp_c);
    setTemp(data.current.temp_c);
    setNight(data.forecast.forecastday[0].hour[0].temp_c);
    setFeelDay(data.forecast.forecastday[0].day.condition.text);
    setFeelNight(data.forecast.forecastday[0].hour[21].condition.text);
    setDate(data.forecast.forecastday[0].date);
    // setLoading(false);
    // setDayIcons(data.current.);
    console.log(data.forecast.forecastday[0].hour[21].condition.text);
    console.log(data.forecast.forecastday[0].day.condition.text);
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
    getRender("Ulaanbaatar");
  }, []);

  const searchHandler = (e) => {
    const search = e.target.value;
    setEmpty(search);
    if (search.length === 0) {
      setSearched([]);
    } else {
      const filtred = cities.filter((city) => {
        return city.includes(search);
      });
      setSearched(filtred);
    }
  };
  const getCityName = (city) => {
    console.log(city);
    setCity(city);
    setSearched([]);
    getRender(city);
    setEmpty("");
  };

  return (
    <div className="relative flex w-[100vw] h-[100vh] overflow-hidden">
      <img src="./orangeMoon.svg" className="absolute top-72 left-60 " />
      <div className="size-full flex justify-center items-center absolute">
        <MiddleCircle />
      </div>

      <Input
        searchHandler={searchHandler}
        searched={searched}
        setCity={setCity}
        getCityName={getCityName}
        empty={empty}
        setEmpty={setEmpty}
      />

      <LeftSection cities={city} temp={temp} feelDay={feelDay} date={date} />
      <RightSection
        cities={city}
        night={night}
        feelNight={feelNight}
        date={date}
      />
      <div className="flex flex-end absolute "></div>
    </div>
  );
}
