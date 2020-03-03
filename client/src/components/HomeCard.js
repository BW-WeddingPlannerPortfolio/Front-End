
// import React from "react";
// import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";

// function Wedding(props) {
//   console.log("These are our props", props);
//   const { itemID } = useParams();
  
//   const seeWeddings = props.items.find(item => itemID === `${item.id}`);
  

//   const { path, url } = useRouteMatch();
  
//   return (
//     <div className="item-wrapper">
//       <div className="item-header">
//         <div className="image-wrapper">
//           <img src={x.wedding_photo} />
//         </div>
//         <div className="item-title-wrapper">
//           <h2>{x.wedding_name}</h2>
//           <h4>{x.description}</h4>
//         </div>
//       </div>
//       <nav className="item-sub-nav">
//         <NavLink to={`${url}`}>Description</NavLink>
//         <NavLink to={`${url}/shipping`}>Shipping</NavLink>
//       </nav>
//       <Route path={`${path}/shipping`}>
//         <ItemShipping item={seeWeddings} />
//       </Route>
      
//       <Route path={`${path}`}>
//         <ItemDescription item={seeWeddings} />
//       </Route>
//     </div>
//   );
// }

// export default Wedding;
