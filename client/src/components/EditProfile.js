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
  const img =
    "https://media.moddb.com/images/articles/1/228/227945/34008485-update-blue-square-stam.jpg";
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
  // console.log(data);

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
    // window.location.reload(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${img})`, height: "100vh" }}
      className="P"
    >
      <div className="text"> updates yor info</div>
      <div className="container">
        <form
          style={{
            display: "grid",
            width: "50%",
            margin: "0 auto"
          }}
          onSubmit={handleSubmit}
        >
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
