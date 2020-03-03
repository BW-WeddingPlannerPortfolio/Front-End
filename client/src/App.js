import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
//import {Cloudinary} from "./components/Cloudinary";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route>
          <Navbar path="/" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
