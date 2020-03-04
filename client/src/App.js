import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { SinglePlanner } from "./components/SinglePlanner";
import { Profile } from "./components/Profile";
import PrivateRoute from "./util/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { AddWedding } from "./components/AddWedding";

function App(props) {
  const dispatch = useDispatch();
  const currentuser = useSelector(state => state.currentuser);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch({ type: "LOGGED_STATUS", payload: true });
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          path={`/addwedding/${currentuser}`}
          component={AddWedding}
        />
        <PrivateRoute path="/profile" component={Profile} />
        {/* <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/profile" component={Profile} /> */}
        <Route path="/Home" component={Home} />
        <Route path="/:id" component={SinglePlanner} />
        <Route path="/" component={Navbar} />
      </Switch>
    </div>
  );
}

export default App;
