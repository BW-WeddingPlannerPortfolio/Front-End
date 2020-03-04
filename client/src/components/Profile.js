import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FetchUsers } from "../actions/";
import "./Profile.css";
export const Profile = props => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  // const items = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const data = useSelector(state => state.planners);
  const loading = useSelector(state => state.isloading);
  const dispatch = useDispatch();
  // console.log(currentuser);
  const loadingcheck = !data && !loading;
  useEffect(() => {
    dispatch(FetchUsers(`/api/planners`));
  }, [loadingcheck, dispatch]);

  // useEffect(() => {
  //   var filtered = data.filter(x => {
  //     return x.username === currentuser.username;
  //   });
  //   setUser(filtered);
  // // }, [data]);
  // console.log(user);
  return (
    <div>
      {" "}
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
              <li className="nav-item active">
                <NavLink to="./profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        {!data && !loading && <h2>Waiting on the items ... </h2>}
        {data && !loading && (
          <>
            {data
              .filter(stuff => stuff.username === currentuser.username)
              .map(x => (
                <div key={x.id} className="uicard">
                  <div className="fon">
                    <img src="https://www.fennes.co.uk/wp-content/uploads/2014/10/fennes_wedding.jpg" />
                  </div>

                  <div className="user">
                    {!x.profile_pic ? (
                      <img src="https://www.york.ac.uk/media/environment/images/staff/NoImageAvailableMale.jpg" />
                    ) : (
                      <img src={x.profile_pic} />
                    )}
                    <p>name: {x.xname}</p>

                    <p>location: {x.home_location}</p>

                    <p>email:{x.email}</p>

                    <button>Edit profile</button>
                    <NavLink to="addwedding">Add Wedding</NavLink>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  );
};
