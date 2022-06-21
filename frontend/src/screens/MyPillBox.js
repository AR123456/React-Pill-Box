import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MyPillBox = () => {
  return (
    <div>
      <Header></Header>
      <Container fluid="md">
        {" "}
        <div className="jumbotron">
          {" "}
          <h1>Medication Schedule</h1>
        </div>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                {" "}
                <Card.Title>Morning</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Med:</Card.Text>

                <Button variant="primary">Mark taken today !</Button>
                <Card.Text>Last Marked taken at :</Card.Text>
                <Button variant="primary">Get Medication information </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>
                {" "}
                <Card.Title>Lunch Time</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Med:</Card.Text>
                <Button variant="primary">Mark taken today !</Button>
                <Card.Text>Last Marked taken at :</Card.Text>
                <Button variant="primary">Get Medication information </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Card>
              <Card.Header>
                {" "}
                <Card.Title>Dinner Time</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Med:</Card.Text>
                <Button variant="primary">Mark taken today !</Button>
                <Card.Text>Last Marked taken at :</Card.Text>
                <Button variant="primary">Get Medication information </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            {" "}
            <Card>
              <Card.Header>
                {" "}
                <Card.Title>Before Bed </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>Med:</Card.Text>
                <Button variant="primary">Mark taken today !</Button>
                <Card.Text>Last Marked taken at :</Card.Text>
                <Button variant="primary">Get Medication information </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MyPillBox;
