import React, { useState, useEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";
import Renderindex from "./Components/Landing/Index";

const Rendermastercomponent = () => {
  const handleInputFocus = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [getCityName, setGetCityName] = useState("");
  const [getCurrentDate, setGetCurrentDate] = useState();
  const [getCountryName, setGetCountryName] = useState("");
  const [getWeatherImage, setGetWeatherImage] = useState(false);
  const [getTemp, setGetTemp] = useState(false);
  const [getWeatherText, setGetWeatherText] = useState(false);
  const [showDivElement, setShowDivElement] = useState(false);
  const [getMaxTemp, setGetMaxTemp] = useState();
  const [getMinTemp, setGetMinTemp] = useState();
  const [getSunrise, setGetSunrise] = useState();
  const [getSunset, setGetSunset] = useState();

  useEffect(() => {
    setTimeout(() => {
      handleInputFocus.current.focus();
    }, 300);
  }, []);

  function handleChange(getInputValue) {
    setInputValue(getInputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setGetCurrentDate(false);
    setGetWeatherImage(false);
    setGetTemp(false);
    setGetWeatherText(false);
    setShowDivElement(false);
    Axios.get(
      baseUrl +
        `forecast.json?key=6c023bf0b1074dabb5f90226211906&q=${inputValue}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        setGetCityName(response.data.location.name + ",");
        setGetCurrentDate(response.data.forecast.forecastday[0].date);
        setGetCountryName(response.data.location.country);
        setGetWeatherImage(response.data.current.condition.icon);
        setGetTemp(response.data.current.temp_c);
        setGetWeatherText(response.data.current.condition.text);
        setGetMaxTemp(response.data.forecast.forecastday[0].day.maxtemp_c);
        setGetMinTemp(response.data.forecast.forecastday[0].day.mintemp_c);
        setGetSunrise(response.data.forecast.forecastday[0].astro.sunrise);
        setGetSunset(response.data.forecast.forecastday[0].astro.sunset);
        setShowDivElement(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Renderindex
      handleInputFocus={handleInputFocus}
      handleChange={handleChange}
      handleFormSubmit={handleFormSubmit}
      inputValue={inputValue}
      getCityName={getCityName}
      getCurrentDate={getCurrentDate}
      getCountryName={getCountryName}
      getWeatherImage={getWeatherImage}
      getTemp={getTemp}
      getWeatherText={getWeatherText}
      getMaxTemp={getMaxTemp}
      getMinTemp={getMinTemp}
      getSunrise={getSunrise}
      getSunset={getSunset}
      showDivElement={showDivElement}
    />
  );
};

export default Rendermastercomponent;
