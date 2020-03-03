import React, {  useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";


export const  SinglePlanner = (props) => {
  const {push} = useHistory();
 // console.log(id);
  const id = props.match.params.id; 
  const dispatch = useDispatch();
  const wed = useSelector(state => state.data);


  const [data, setData] = useState([]);
  console.log("props", props);

  useEffect(() => {
    dispatch(getData());
  },[dispatch]);

  return (
    <div>
    HI
  </div>
  );
};

