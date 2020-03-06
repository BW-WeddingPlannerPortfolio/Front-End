import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Delete } from "../actions/";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const PlannerWeddingsSingle = ({ data }) => {
  const currentuser = useSelector(state => state.currentuser);
  const dispatch = useDispatch();
  const { push } = useHistory();
  // const del = (id) => {
  //   dispatch(Delete(data.id))
  // }
  // function del(id) {
  //   dispatch(Delete(id));
  // }
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
            <Button
              onClick={() => {
                console.log(data.id);
                dispatch(Delete(`/api/planner/weddings/${data.id}`));
                push("/Profile");
                // TODO: delete on click
                // TODO: delete action is commented out for now
              }}
              variant="primary"
            >
              Delete
            </Button>
          </p>
        </Jumbotron>
      </div>
    </div>
  );
};
