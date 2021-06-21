import React from "react";
import moment from "moment";

const Renderforecast = (props) => {
  return (
    <>
      <div className="main-wrapper">
        {props.showDivElement && (
          <>
            <h1>Hourly Forecast</h1>
            <div className="forecast-wrapper">
              {props.showForecast.map((getHours) => {
                return (
                  <div className="hourly-data" key={getHours.time}>
                    <h2>{moment(getHours.time).format("hh:mm:ss a")}</h2>
                    <img src={getHours.condition.icon} alt="clouds" />
                    <h1>
                      {getHours.temp_c} <span>&#xb0;</span>
                    </h1>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Renderforecast;
