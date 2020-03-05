import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const AddWedding = props => {
  const { push } = useHistory();

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>your wedding name</Form.Label>
          <Form.Control type="email" placeholder="Enter wedding name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>your wedding theme</Form.Label>
          <Form.Control type="password" placeholder="enter wedding theme" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group controlId="formGridAddress1">
          <Form.Label>location of you wedding</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>description</Form.Label>
          <Form.Control placeholder="Oh how the turn tables" />
        </Form.Group>
      </Form.Row>

      <Button onClick={() => push("/profile")} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
