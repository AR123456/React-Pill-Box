import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DrugInfoModal from "../components/DrugInfoModal";
import axios from "axios";

const getDrugInfo = async () => {
  let search = "Lasix";
  try {
    const res = await axios.get(
      "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" +
        search +
        "&limit=1"
    );
    console.log(res.data.results[0]);
    console.log(res.data.results[0].openfda.generic_name);
    console.log(res.data.results[0].description[0]);
    console.log(res.data.results[0].dosage_and_administration[0]);
    console.log(res.data.results[0].indications_and_usage);
    return <DrugInfoModal></DrugInfoModal>;
  } catch (err) {
    console.log(err);
  }
};

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
                <Card.Text>Med: Lasix</Card.Text>

                <Button variant="primary">Mark taken today !</Button>
                <Card.Text>Last Marked taken at :</Card.Text>
                <Button variant="primary">
                  <a onClick={getDrugInfo}>Get Medication information</a>{" "}
                </Button>
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
                <Card.Text>Med: Crestor</Card.Text>
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
