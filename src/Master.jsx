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
    Axios.get(
      baseUrl +
        `forecast.json?key=6c023bf0b1074dabb5f90226211906&q=${inputValue}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        setGetCityName(response.data.location.name + ",");
        setGetCurrentDate(response.data.forecast.forecastday[0].date);
        setGetCountryName(response.data.location.country);
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
    />
  );
};

export default Rendermastercomponent;
