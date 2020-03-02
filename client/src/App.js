import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import {Cloudinary} from "./components/Cloudinary";
import { Route} from "react-router-dom";
import JoinNow from "./components/JoinNow";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Route path ="/Join">
       <JoinNow/>
       </Route>
    </div>
   
  );
}

export default App;
