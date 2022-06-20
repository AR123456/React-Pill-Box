import React from "react";
// import { Route } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Offcanvas,
  Form,
  FormControl,
} from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Pill Box </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-light">
            <Nav className="me-auto ">
              <Nav.Link href="#home">Home</Nav.Link>

              <Nav.Link href="#link">My Pill Box</Nav.Link>

              <Nav.Link href="#link">Medications</Nav.Link>

              <Nav.Link href="#link">SignUp</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              {/* <Form className="d-flex">
              show if on medications page 
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
              <Navbar.Text>
                Signed in as: <a href="#login">John Doe</a>
              </Navbar.Text>
              {/* <Button>
              if not logged in 
                {" "}
                <Nav.Link href="#link">Sign In </Nav.Link>
              </Button>
              <Button>
                {" "}
                <Nav.Link href="#link">Sign Up </Nav.Link>
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
