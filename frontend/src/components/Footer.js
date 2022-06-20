import React from "react";
import { Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Nav fixed="bottom" className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">About My Pill Box </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Footer;
