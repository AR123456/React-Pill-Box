import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
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
              <Button className="btn-pillBox" variant="primary">
                Log In
              </Button>
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <Button className="btn-pillBox" variant="primary">
                SignUp - New Users
              </Button>
            </ListGroupItem>
            <ListGroupItem>
              {" "}
              <Button className="btn-pillBox" variant="primary">
                Log Out
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeScreen;
