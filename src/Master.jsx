import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";
import { Apikey } from "./Components/Landing/Utils/api-key";
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
  const [showForecast, setShowForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showLocalTime, setShowLocalTime] = useState();
  const [showInvalidMessage, setShowInvalidMessage] = useState();

  function handleChange(getInputValue) {
    setInputValue(getInputValue);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setGetCityName(false);
    setGetCurrentDate(false);
    setGetWeatherImage(false);
    setGetTemp(false);
    setGetWeatherText(false);
    setShowDivElement(false);
    setLoading(true);
    setShowInvalidMessage(false);
    Axios.get(
      baseUrl +
        `forecast.json?key=${Apikey}&q=${inputValue}&days=1&aqi=no&alerts=no`
    )
      .then((response) => {
        setGetCityName(response.data.location.name.toLowerCase() + ",");
        setGetCurrentDate(response.data.forecast.forecastday[0].date + ",");
        setGetCountryName(response.data.location.country);
        setShowLocalTime(response.data.location.localtime);
        setGetWeatherImage(response.data.current.condition.icon);
        setGetTemp(response.data.current.temp_c);
        setGetWeatherText(response.data.current.condition.text);
        setGetMaxTemp(response.data.forecast.forecastday[0].day.maxtemp_c);
        setGetMinTemp(response.data.forecast.forecastday[0].day.mintemp_c);
        setGetSunrise(response.data.forecast.forecastday[0].astro.sunrise);
        setGetSunset(response.data.forecast.forecastday[0].astro.sunset);
        setShowForecast(response.data.forecast.forecastday[0].hour);
        setShowDivElement(true);
        setLoading(false);
      })
      .catch((error) => {
        setShowInvalidMessage(true);
        setLoading(false);
      });
  }

  useEffect(() => {
    /* gsap animation */
    const items = ["#animateInputField", "#animate-button"];
    const masterTimeline = gsap.timeline();
    items.map((animateSelectors) => {
      masterTimeline.from(animateSelectors, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      });
    });
    setTimeout(() => {
      handleInputFocus.current.focus();
    }, 300);
  }, []);

  useEffect(() => {
    /* gsap animation */
    const animateHeading1 = ".animate-heading-1";
    const masterTimeline = gsap.timeline();
    masterTimeline.from(animateHeading1, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
  }, [getCityName]);

  useEffect(() => {
    /* gsap animation */
    const animateHeading2 = ".animate-heading-2";
    const masterTimeline = gsap.timeline();
    masterTimeline.from(animateHeading2, {
      y: -50,
      opacity: 0,
      duration: 0.5,
    });
  }, [getCurrentDate]);

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
      showForecast={showForecast}
      loading={loading}
      showLocalTime={showLocalTime}
      showInvalidMessage={showInvalidMessage}
    />
  );
};

export default Rendermastercomponent;
