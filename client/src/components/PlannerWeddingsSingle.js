import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
export const PlannerWeddingsSingle = ({ data }) => {
  return (
    <div>
      <div>
        <Jumbotron
          style={{ margin: "5px auto", border: "5px solid", width: "50%" }}
        >
          <p>
            your wedding name :{" "}
            <span style={{ fontWeight: "bolder" }}>{data.wedding_name}</span>
          </p>
          <p>
            information about your wedding :{" "}
            <span style={{ fontWeight: "bolder" }}>{data.description}</span>
          </p>
          <p>
            location of your wedding :{" "}
            <span style={{ fontWeight: "bolder" }}>
              {data.wedding_location}
            </span>
          </p>
          <p>
            <Button variant="primary">Delete</Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};
