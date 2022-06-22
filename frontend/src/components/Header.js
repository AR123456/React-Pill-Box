import React from "react";
import { Link } from "react-router-dom";
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
          <Navbar.Brand href="/">My Pill Box </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="navbar-light">
            <Nav className="me-auto ">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/pillbox">My Pill Box</Nav.Link>

              <Nav.Link href="/medlist">Medications</Nav.Link>

              <Nav.Link href="/signup">Sign Up</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
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
              {/* if not logged in  */}{" "}
              {/*  <Nav.Link href="/signin">SignUp</Nav.Link> logged in show  */}
              <Nav.Link href="/signin">Sign Out </Nav.Link>{" "}
              {/* <Nav.Link href="#link">Sign Up </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
