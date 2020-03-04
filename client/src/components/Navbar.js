import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import movie from "../assets/wed.mp4";
import { NavLink } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import Cloudinary from "./SignUp";
import { Login } from "./Login";

export const Navbar = () => {
  const loggedin = useSelector(state => state.loggedin);
  // const currentuser = useSelector(state => state.currentuser);
  useEffect(() => {}, [loggedin]);
  const dispatch = useDispatch();
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

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
            </ul>

            {/* <!-- Right --> */}

            <ul className="navbar-nav nav-flex-icons">
              {!loggedin ? (
                <>
                  <li className="nav-item">
                    <Button variant="primary" onClick={handleShowLogin}>
                      Login
                    </Button>
                  </li>

                  <li className="nav-item">
                    <Button variant="primary" onClick={handleShow}>
                      Join Now
                    </Button>
                  </li>
                </>
              ) : (
                <>
                  (
                  <li className="nav-item">
                    <Button
                      variant="primary"
                      onClick={() =>
                        localStorage.removeItem("token") &
                        localStorage.removeItem("CURRENTUSER") &
                        dispatch({ type: "LOGGED_STATUS", payload: false })
                      }
                    >
                      Sign out
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* // <!-- Navbar --> */}

      {/* // <!--Carousel Wrapper--> */}

      {/* <!--Slides--> */}
      <div className="carousel-inner" role="listbox">
        {/* <!--First slide--> */}
        <div className="carousel-item active">
          <div className="view">
            {/* <!--Video source--> */}
            <video src={movie} className="video-intro" autoPlay loop muted />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>JOIN NOW</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "80vh", margin: "10px" }}>
          <Cloudinary />
        </Modal.Body>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>SIGN IN</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "50vh", margin: "10px" }}>
          <Login />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
