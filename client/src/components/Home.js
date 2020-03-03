import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import "./Home.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { getData } from "../actions";
import { Search } from "./Search";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  const [planners, setPlanners] = useState([]);
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const wed = useSelector(state => state.data);
  // console.log(wed);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  //
  console.log(wed);
  const handleInput = e => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    var filtered = wed.filter(x => {
      return x.wedding_name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setPlanners(filtered);
  }, [query]);
  // useEffect(() => {
  //   setPlanners(wed.data);
  // }, []);
  console.log(planners);
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
              <li className="nav-item">
                <a className="nav-link">Venues</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Dresses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Registry</a>
              </li>
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
          {planners.map(x => (
            <Card key={x.id} style={{ width: "18rem", margin: "1rem" }}>
              <Card.Img
                style={{ minHeight: "200px" }}
                variant="top"
                src={x.wedding_photo}
              />
              <Card.Body>
                <Card.Title>{x.wedding_name}</Card.Title>
                <Card.Text>{x.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
