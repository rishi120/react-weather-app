import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment";

const Renderindex = (props) => {
  return (
    <section className="section-body-wrapper">
      <h1>WEATHER APP</h1>
      <div className="content-wrapper">
        <Container>
          <Form className="search-form" onSubmit={props.handleFormSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter city"
                required
                onChange={(e) => props.handleChange(e.target.value)}
                ref={props.handleInputFocus}
                value={props.inputValue}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <div className="data-wrapper">
          <h1>
            {props.getCityName} <span>{props.getCountryName}</span>
          </h1>
          {props.getCurrentDate && (
            <h4>{moment(props.getCurrentDate).format("dddd DD MMMM")}</h4>
          )}
        </div>
      </div>
    </section>
  );
};

export default Renderindex;
