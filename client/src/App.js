import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import {Cloudinary} from "./components/Cloudinary";
import { Route} from "react-router-dom";
//import FormikJoinNowForm from "./components/JoinNow";
import JoinNowModal from "./components/JoinNowModal";


function App() {
  return (
    <div className="App">
      <Navbar />
     
      <Route path ="/Join">
       <JoinNowModal/>
       </Route>
    </div>
   
  );
}

export default App;
