import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { getData } from "../actions";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  const [weddings, setWeddings] = useState([]);
  const dispatch = useDispatch();
  const wed = useSelector(state => state);
  console.log(wed);
  useEffect(() => {
    dispatch(getData());
  }, []);
  useEffect(() => {
    setWeddings(wed.data);
  }, [wed]);
  console.log(weddings);
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

            {/* <!-- Right --> */}
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a className="nav-link">Login</a>
              </li>

              <li className="nav-item">
                <a variant="primary">Submit</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {weddings.map(each => (
          <div>
            <h1 style={{ marginTop: "5px" }}>{each.wedding_name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
