import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import movie from "../assets/wed.mp4";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export const Navbar = () => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <div className="container">
          {/* <!-- Brand --> */}
          <div>
            <img alt="logo" src={logo} />
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
                <a className="nav-link" href="#">
                  Home
                </a>
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
                <Button variant="primary" onClick={handleShow}>
                  Submit
                </Button>
              </li>
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
            <h1 className="text">
              Be Our Guest!! <br />
              this can be a search bar{" "}
            </h1>
            {/* <!--Video source--> */}
            <video src={movie} className="video-intro" autoPlay loop muted />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>helolo</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Navbar;
