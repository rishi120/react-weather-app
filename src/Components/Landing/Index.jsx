import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Renderindex = () => {
  return (
    <section className="section-body-wrapper">
      <h1>WEATHER APP</h1>
      <div className="content-wrapper">
        <Container>
          <Form className="search-form">
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter city" required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Renderindex;
