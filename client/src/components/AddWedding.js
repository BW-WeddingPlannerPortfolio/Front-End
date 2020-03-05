import React from "react";
import { Col, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendData, PLANNER_FORM_CHANGE } from "../actions/";

export const AddWedding = props => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const weddings = useSelector(state => state.weddings);
  const currentuser = useSelector(state => state.currentuser);
  const img =
    "https://i0.wp.com/blog.zola.com/wp-content/uploads/2018/03/amy-jackson-photography-1.jpg?fit=1200%2C800&ssl=1";
  const handlesubmit = e => {
    e.preventDefault();
    dispatch(sendData(`/api/planner/weddings`, weddings));
    setTimeout(() => {
      push("/profile");
    }, 200);
  };
  const handlechange = e => {
    e.preventDefault();
    dispatch({
      type: PLANNER_FORM_CHANGE,
      name: e.target.name,
      value: e.target.value
    });
  };

  return (
    <div style={{ height: "100vh", backgroundImage: `url(${img})` }}>
      <Form
        style={{
          display: "table",
          margin: "0 auto",
          paddingTop: "10em",
          color: "black",
          fontSize: "1.1rem",
          fontWeight: "bolder",
          lineHeight: "50px",
          letterSpacing: "1px",
          textShadow: "2px 2px 2px white"
        }}
        onSubmit={handlesubmit}
      >
        <Form.Row>
          <Form.Group
            style={{ margin: "10px" }}
            as={Col}
            controlId="formGridText"
          >
            <Form.Label>your wedding name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter wedding name"
              value={weddings.wedding_name}
              onChange={handlechange}
            />
          </Form.Group>

          <Form.Group
            style={{ margin: "10px" }}
            as={Col}
            controlId="formGridText"
          >
            <Form.Label>your wedding theme</Form.Label>
            <Form.Control
              value={weddings.theme}
              onChange={handlechange}
              type="text"
              placeholder="enter wedding theme"
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group style={{ margin: "10px" }} controlId="formGridAddress1">
            <Form.Label>location of you wedding</Form.Label>
            <Form.Control
              value={weddings.wedding_location}
              onChange={handlechange}
              placeholder="1234 Main St"
            />
          </Form.Group>

          <Form.Group style={{ margin: "10px" }} controlId="formGridAddress2">
            <Form.Label>description</Form.Label>
            <Form.Control
              value={weddings.description}
              onChange={handlechange}
              placeholder="Oh how the turn tables"
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
