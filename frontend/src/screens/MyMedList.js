import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Table,
  Button,
  Form,
  Card,
  Col,
  Row,
} from "react-bootstrap";
const MyMedList = () => {
  return (
    <div>
      <Header></Header>
      <Container fluid="md">
        <div className="jumbotron">
          {" "}
          <h1>View & Manage Medications </h1>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Medication</th>
              <th>Dose</th>
              <th>When</th>
              <th>Pills Remaining</th>
              <th>Deactivate Medication</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lasix</td>
              <td>10mg</td>
              <td>Morning</td>
              <td>30</td>
              <td>
                <Button>Deactivate</Button>
              </td>
            </tr>
            <tr>
              <td>Crestor</td>
              <td>10mg</td>
              <td>Before Bed</td>
              <td>30</td>
              <td>
                <Button>Deactivate</Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Container>
          <Form>
            <h1>Add Medications</h1>
            <Form.Group className="mb-3">
              <Form.Label>Medication Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Medication Name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dose(please enter number of pills)</Form.Label>
              <Form.Control type="number" placeholder="Dose" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                What is the strength ? (mg, unit, ml, ect)
              </Form.Label>
              {/* <Form.Control type="select" placeholder="Strength of pill" /> */}
              <Form.Select type="select" placeholder="Strength of pill">
                <option>mg</option>
                <option>ml</option>
                <option>unit</option>
                <option>cc</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>How many pills in bottle?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Number of pills from pharmacy"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time of Day </Form.Label>
              {/* <Form.Control type="select" placeholder="Time of day" /> */}
              <Form.Select type="select" placeholder="Time of day">
                <option>Morning</option>
                <option>Lunch Time</option>
                <option>Dinner Time</option>
                <option>Bed Time</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
        <Container>
          <div className="jumbotron">
            <h1>Deactivated Medications/Medication History</h1>
          </div>
          <Card.Header>Advil</Card.Header>
          <Card.Header>Tylenol</Card.Header>
          <Card.Header>Benadryl</Card.Header>
          <Card.Header>Lipitor</Card.Header>
          <Card.Header>Lisinopril</Card.Header>
        </Container>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default MyMedList;
