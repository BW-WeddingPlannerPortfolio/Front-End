import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FetchUsers, getWeddingData } from "../actions/";
import "./Profile.css";
export const Profile = props => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  //
  const loading = useSelector(state => state.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUsers(`/api/planners`));
  }, [loading, dispatch]);
  const allWeddings = useSelector(state => state.data);
  const currentuser = useSelector(state => state.currentuser);
  const data = useSelector(state => state.planners);
  console.log(allWeddings);

  useEffect(() => {
    dispatch(getWeddingData(currentuser.id));
  }, [loading, dispatch]);
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
      {loading ? (
        <div style={{ margin: "30rem", fontSize: "3rem" }}>loading...</div>
      ) : (
        <>
          {data
            .filter(stuff => stuff.id === currentuser.id)
            .map(x => (
              <div className="wed-info" style={{ display: "flex" }}>
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
                    <p>
                      Name: <i style={{ opacity: "0.7" }}>{x.username}</i>
                    </p>

                    <p>
                      Location:{" "}
                      <i style={{ opacity: "0.7" }}>{x.home_location}</i>
                    </p>

                    <p>
                      Email: <i style={{ opacity: "0.7" }}>{x.email}</i>
                    </p>

                    <NavLink to={`/editprofile/${currentuser.id}`}>
                      Edit profile
                    </NavLink>
                    <NavLink to={`/addwedding/${currentuser.id}`}>
                      Add Wedding
                    </NavLink>
                  </div>
                </div>
                <div className="info">
                  <h5>Your Work</h5>
                  <div>
                    {allWeddings
                      .filter(weddings => weddings.planner_id == currentuser.id)
                      .map(myWedding => (
                        <div
                          style={{
                            background:
                              "linear-gradient(45deg, black, transparent)"
                          }}
                        >
                          <div>
                            <p>
                              <span style={{ fontWeight: "bold" }}>
                                wedding name:
                              </span>{" "}
                              <span style={{ color: "gray" }}>
                                {myWedding.wedding_name}
                              </span>
                            </p>
                          </div>
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              wedding theme:
                            </span>{" "}
                            <span style={{ color: "gray" }}>
                              {myWedding.theme}
                            </span>
                          </p>
                          <p>
                            <span style={{ fontWeight: "bold" }}>
                              wedding location:
                            </span>{" "}
                            <span style={{ color: "gray" }}>
                              {myWedding.wedding_location}
                            </span>
                          </p>
                          <button
                            style={{ background: "none", color: "green" }}
                          >
                            Edit Venue{" "}
                          </button>
                          <button style={{ background: "none", color: "red" }}>
                            Delete Venue
                          </button>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};
