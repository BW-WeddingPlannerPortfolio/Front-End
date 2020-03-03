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
      {wed.map(user => user.id == id && 
      <div>
        <h2>{user.wedding_name}</h2>
        <img src ={user.wedding_photo}/>
        <p>{user.theme}</p>
        <p>{user.wedding_location}</p>
        <p>{user.description}</p>
      
      </div>
      )}
    </div>
  );
};
