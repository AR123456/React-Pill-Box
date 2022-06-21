import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyPillBox = () => {
  return (
    <div>
      <Container fluid="md" className="jumbotron">
        {" "}
        <h2>Medication Schedule screen with 4 cards</h2>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyPillBox;
