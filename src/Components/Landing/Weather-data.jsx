import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Renderweatherdata = (props) => {
  const weatherData = [
    {
      data: props.getMaxTemp,
      text: "High",
    },
    {
      data: props.getMinTemp,
      text: "Low",
    },
    {
      data: props.getSunrise,
      text: "Sunrise",
    },
    {
      data: props.getSunset,
      text: "Sunset",
    },
  ];
  return (
    <div className="weather-data-wrapper">
      <Row>
        <Col md={6}>
          <div className="col-content-wrapper">
            <Row className="no-gutters">
              <Col xs={3}>
                <div className="temp-data">
                  {props.getWeatherImage && (
                    <img
                      src={props.getWeatherImage}
                      alt="Icon"
                      className="img-fluid"
                    />
                  )}
                </div>
              </Col>
              <Col xs={9}>
                <div className="temp-data">
                  {props.getTemp && (
                    <h1>
                      {props.getTemp}
                      <span>&#8451;</span>
                    </h1>
                  )}
                  {props.getWeatherText && <h3>{props.getWeatherText}</h3>}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <div className="col-content-wrapper">
            {props.showDivElement && (
              <div className="col-data-wrapper">
                <Row style={{ margin: "auto" }}>
                  {weatherData.map((getData) => {
                    return (
                      <Col xs={3} key={getData.data}>
                        <div className="inner-col-wrapper">
                          <h1>{getData.data}</h1>
                          <p>{getData.text}</p>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Renderweatherdata;
