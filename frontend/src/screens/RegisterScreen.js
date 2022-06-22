import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
const RegisterScreen = () => {
  return (
    <>
      <Header></Header>
      <Container fluid="md">
        <div className="jumbotron">
          <h1>Sign up for My Pill Box</h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Row>
            <Form.Text className="text-muted">
              <strong>
                {" "}
                Click submit and a link to continue registration will be sent to
                your registration email.
              </strong>
            </Form.Text>
          </Row>
          <Button variant="primary" type="submit" disabled>
            Submit - this is not active until answer with a word below:
          </Button>
          <Row>
            <Form.Text className="text-muted">
              If one hand has an apple and the other 2 oranges, how many fruits
              do you have?
            </Form.Text>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Answer is </Form.Label>
            <Form.Control type="text" placeholder="Answer is" />
            {/* only allow the word three  */}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default RegisterScreen;
