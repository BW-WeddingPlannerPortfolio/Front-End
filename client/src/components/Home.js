import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { getData } from "../actions";
import { Search } from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const Home = props => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  //
  const { push } = useHistory();
  //
  const dispatch = useDispatch();
  const loggedin = useSelector(state => state.loggedin);
  const [planners, setPlanners] = useState([]);
  const [query, setQuery] = useState("");
  // console.log(wed);
  // console.log(planners);
  //
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  // console.log(wed);
  // console.log(planners);
  const wed = useSelector(state => state.data);
  useEffect(() => {
    var filtered = wed.filter(x => {
      return x.wedding_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setPlanners(filtered);
  }, [wed, query]);
  const handleInput = e => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          {/* <!-- Brand --> */}

          <div>
            <NavLink to="./">
              <img alt="logo" src={logo} />
            </NavLink>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* <!-- Links --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Left --> */}
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="./Home" className="nav-link">
                  Home
                </NavLink>
              </li>
              {loggedin && (
                <li className="nav-item active">
                  <NavLink to="./profile" className="nav-link">
                    Profile
                  </NavLink>
                </li>
              )}
              {/* <li className="nav-item">
                <Button
                  style={{ marginLeft: "30rem" }}
                  variant="primary"
                  onClick={() =>
                    push("/Home") &
                    localStorage.removeItem("token") &
                    localStorage.removeItem("CURRENTUSER") &
                    dispatch({ type: "LOGGED_STATUS", payload: false })
                  }
                >
                  Sign out
                </Button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      <div
        style={{
          paddingTop: "15rem"
        }}
      >
        <div className="Search-container">
          <Search handleInput={handleInput} query={query} />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap"
          }}
        >
          {wed ? (
            planners.map(x => (
              <Card key={x.id} style={{ width: "18rem", margin: "1rem" }}>
                <Card.Img
                  style={{ minHeight: "200px" }}
                  variant="top"
                  src={x.wedding_photo}
                />
                <Card.Body>
                  <Card.Title>{x.wedding_name}</Card.Title>
                  <Card.Text>{x.description}</Card.Text>
                  <NavLink to={`/${x.id}`}>
                    <Button variant="primary">Planner</Button>
                  </NavLink>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>nothing yet</h1>
          )}
        </div>
      </div>
    </div>
  );
};
