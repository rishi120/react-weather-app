import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Renderweatherdata = (props) => {
  console.log(props.getWeatherImage);
  return (
    <div className="weather-data-wrapper">
      <Row>
        <Col md={6}>
          <div className="col-content-wrapper">
            <Row className="no-gutters">
              <Col md={3}>
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
              <Col md={9}>
                <div className="temp-data">
                  {props.getTemp && (
                    <h1>
                      {props.getTemp}
                      <span>&#xb0;</span>
                    </h1>
                  )}
                  {props.getWeatherText && <h3>{props.getWeatherText}</h3>}
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={6}>
          <div className="col-content-wrapper">ddd</div>
        </Col>
      </Row>
    </div>
  );
};

export default Renderweatherdata;
