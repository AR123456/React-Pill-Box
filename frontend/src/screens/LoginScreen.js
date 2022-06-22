import React from "react";
import { Form, Container, Button, Row } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginScreen = () => {
  return (
    <div>
      <Header></Header>{" "}
      <Container fluid="md">
        <div className="jumbotron">
          <h1>Sign in to your account </h1>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Keep me logged in" />
          </Form.Group>

          <Button variant="primary" type="submit" disabled>
            Submit - this is not active until you answer with a word:
          </Button>
          <Row>
            <Form.Text className="text-muted">
              How many pills do you see ?
            </Form.Text>
            <Form.Text className="text-muted">
              <i class="fa-solid fa-capsules fa-2xl"></i>
              <br />
              <i class="fa-solid fa-capsules fa-2xl"></i>
              <br />
              <i class="fa-solid fa-capsules fa-2xl"></i>
            </Form.Text>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Answer is: </Form.Label>
            <Form.Control type="text" placeholder="Answer is" />
            {/* only allow the word six  */}
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
        </Form>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginScreen;
