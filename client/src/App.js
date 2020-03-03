import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import {SinglePlanner} from "./components/SinglePlanner";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path = "/:id">
          <SinglePlanner/>
        </Route>
        <Route>
          <Navbar  path="/" />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
