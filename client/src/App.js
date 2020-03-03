import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SinglePlanner } from "./components/SinglePlanner";
import { NavLink } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";

function App(props) {
  // const dispatch = useDispatch();
  // const currentuser = useSelector(state => state.currentuser);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch({ type: "LOGGED_STATUS", payload: true });
  //   }
  // }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/:id" component={SinglePlanner} />
        <Route path="/" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
