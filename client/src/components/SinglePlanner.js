import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";

export const SinglePlanner = ({ match }) => {
  const dispatch = useDispatch();
  const wed = useSelector(state => state.data);
  const id = match.params.id;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <div>
      {wed.map(
        user => user.id === Number(id) && <div>{user.wedding_name}</div>
      )}
    </div>
  );
};
