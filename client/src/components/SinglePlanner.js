// import React, {  useState,useEffect } from "react";
// import axios from "axios";


// export const  SinglePlanner = (props) => {
//   const [data, setData] = useState([]);
//   console.log(props.match.params.id);

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  //   axios
  //     .get(`https://wedding-planner-portfolio.herokuapp.com/api/planners${id}`)
  //     .then(response => {
  //       console.log(response.data.results);
  //       setData(response.data.results);
  //     })
  //     .catch(error => {
  //       console.log(error, "axios error")
  //     })
  // }, []);

  // return (
  //       <div>
  //       {data.map(data => {
  //          return (
  //        <div key={data.id}>
  //           <h2>Planner: {data.planner_id}</h2>
  //           <h2>Wedding Name: {data.wedding_name}</h2>
            
  //           <h3>Location: {data.wedding_location}</h3>
  //           <h3>Theme: {data.theme}</h3>
  //           <h3>Description: {data.description}</h3>
  //         </div>
  //          );
  //          })}    
  //       </div>
//   return (
//     <div>
//       HI
//     </div>
//   )

// };

