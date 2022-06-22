import React from "react";
import { Card, Button, ListGroup, ListGroupItem, Nav } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <div className="jumbotron">
        This card is in a jumbotron so really to not need the card.
        <Card>
          <Card.Header>My Pill Box </Card.Header>

          <Card.Body>
            <Card.Title>Keep track of medications</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <ListGroup>
              <ListGroupItem>
                {" "}
                <Nav.Link href="/signin">Sign In</Nav.Link>
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <Nav.Link href="/signup">Sign Up New Users</Nav.Link>
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <Nav.Link href="/signin">Log Out</Nav.Link>
              </ListGroupItem>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default HomeScreen;
