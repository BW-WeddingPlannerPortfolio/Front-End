import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PlannerWeddingsSingle } from "./PlannerWeddingsSingle";
import { getWeddingData } from "../actions";
import { NavLink } from "react-router-dom";
export const PlannerWeddings = () => {
  const back = "\u23CE";
  const allWeddings = useSelector(state => state.plannersData);
  const currentuser = useSelector(state => state.currentuser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeddingData(`/api/planner/${currentuser.id}/weddings`));
  }, [dispatch]);
  console.log(allWeddings);
  return (
    <div>
      <NavLink to="/Profile">
        <span style={{ fontSize: "4rem" }}>{back}</span>
      </NavLink>
      <div>
        {allWeddings
          // .filter(stuff => stuff.planner_id === currentuser.id)

          .map(data => (
            <PlannerWeddingsSingle data={data} />
          ))}
      </div>
    </div>
  );
};
