import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";
import Renderweatherdata from "./Weather-data";
import Renderforecast from "./Forecast";
import sadImage from "../../assets/images/sad.png";

const Renderindex = (props) => {
  return (
    <>
      <section className="section-body-wrapper">
        {props.loading && <h1 className="loader">Loading...</h1>}
        {props.showInvalidMessage && (
          <div className="error-message-wrapper">
            <h1>
              <img src={sadImage} />
              Sorry, the specified city was not found...
            </h1>
          </div>
        )}
        <div className="content-wrapper">
          <Container>
            <Form className="search-form" onSubmit={props.handleFormSubmit}>
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  required
                  onChange={(e) => props.handleChange(e.target.value)}
                  ref={props.handleInputFocus}
                  value={props.inputValue}
                  id="animateInputField"
                />
              </Form.Group>
              <Button variant="primary" type="submit" id="animate-button">
                Get Weather
              </Button>
            </Form>
          </Container>
          <div className="data-wrapper">
            {props.getCityName && (
              <h1 className="animate-heading-1">
                {props.getCityName} <span>{props.getCountryName}</span>
              </h1>
            )}

            {props.getCurrentDate && (
              <h4 className="animate-heading-2">
                <span style={{ paddingRight: "5px" }}>
                  {moment(props.getCurrentDate).format("dddd DD MMMM")},
                </span>
                <span>{moment(props.showLocalTime).format("hh:mm:ss a")}</span>
              </h4>
            )}
          </div>
          <Container>
            <Renderweatherdata
              getWeatherImage={props.getWeatherImage}
              getTemp={props.getTemp}
              getWeatherText={props.getWeatherText}
              getMaxTemp={props.getMaxTemp}
              getMinTemp={props.getMinTemp}
              getSunrise={props.getSunrise}
              getSunset={props.getSunset}
              showDivElement={props.showDivElement}
            />
            <Renderforecast
              showForecast={props.showForecast}
              showDivElement={props.showDivElement}
            />
          </Container>
        </div>
      </section>
    </>
  );
};

export default Renderindex;
