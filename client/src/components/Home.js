import React, {useState} from "react";
import "./Navbar.css";
//import logo from "../assets/images/logo.png";
import HomeCard from "./HomeCard";
import dummydata from "./dummydata";

export const Home = () => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");

  const [data] = useState(dummydata);


  

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          {/* <!-- Brand --> */}

          <div>
            {/* <NavLink to="./">
              <img alt="logo" src={logo} />
            </NavLink> */}
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
                {/* <NavLink to="./Home" className="nav-link">
                  Home
                </NavLink> */}
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
                {/* <Button variant="primary" onClick={handleShow}>
                  Submit
                </Button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
      {data.map(p => (
        <HomeCard key={p.id} propsPassedFromParent={p} />
      ))}
      </div>
    </div>
    

  );
};
