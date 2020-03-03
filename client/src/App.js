import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/Login.js";


function App() {
  return (
    <Router>
      <NavBar/>
      <Route path="/login" component={Login}/>
     
    </Router>
  );
}

export default App; 
