import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "../actions";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
export const EditProfile = props => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  //
  const loggedin = useSelector(state => state.loggedin);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
    home_location: "",
    profile_pic: "",
    email: ""
  });
  const currentuser = useSelector(state => state.currentuser);
  console.log(data);

  // const uploadImage = async e => {
  //   const files = e.target.files;
  //   const data = new FormData();
  //   data.append("file", files[0]);
  //   data.append("upload_preset", "upload");
  //   const res = await fetch(
  //     "	https://api.cloudinary.com/v1_1/takija/image/upload",
  //     {
  //       method: "POST",
  //       body: data
  //     }
  //   );
  //   var file = await res.json();
  //   setData(...data, { profile_pic: file.secure_url });
  // };

  const handleChange = e => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const { history } = this.props;
    dispatch(editData(`/api/planner/${currentuser.id}`, data));
    push("/profile");
    window.location.reload(false);
  };

  return (
    <div className="App">
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
          </div>
        </div>
      </nav>
      <div style={{ marginTop: "10rem" }}>
        <form onSubmit={handleSubmit}>
          Username:
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder={currentuser.username}
            onChange={handleChange}
          />
          Password:
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Your Password"
            onChange={handleChange}
          />
          Email:
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder={currentuser.email}
            onChange={handleChange}
          />
          Location:
          <input
            type="location"
            name="home_location"
            value={data.home_location}
            placeholder={currentuser.home_location}
            onChange={handleChange}
          />
          {/* Upload Image:
        <div>
          <input
            type="file"
            filename="image"
            placeholder="Change An Image"
            onChange={handleChange}
          />
          {
            <img
              alt="profile "
              src={data.profile_pic}
              style={{ height: "50px" }}
              onChange={uploadImage}
            />
          }
        </div> */}
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
