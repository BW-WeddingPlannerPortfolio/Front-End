import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FetchUser, getWeddingData } from "../actions/";
import "./Profile.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

// import {
//   Modal,
//   ModalHeader,
//   ModalBody,
//   ModalFooter
// } from "@bootstrap-styled/v4";
// import Alert from "@bootstrap-styled/v4/lib/Alert";
// import Button from "@material-ui/core/Button";
//
export const Profile = props => {
  window.$ = window.jQuery = require("jquery");
  window.Popper = require("popper.js").default;
  require("bootstrap");
  //
  const dispatch = useDispatch();
  const { push } = useHistory();
  //
  const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);
  //

  const data = useSelector(state => state.planners);
  const allWeddings = useSelector(state => state.plannersData);
  const currentuser = useSelector(state => state.currentuser);
  const loading = useSelector(state => state.loading);
  const log = useSelector(state => state.loggedin);
  // const update = useSelector(state => state.weddings);
  // dispatch({ type: "CURRENT_USER", payload: currentuser });
  useEffect(() => {
    dispatch(FetchUser(`/api/planners/${currentuser.id}`));
  }, [dispatch]);

  console.log(data);

  useEffect(() => {
    dispatch(getWeddingData(`/api/planner/${currentuser.id}/weddings`));
  }, [data, dispatch]);
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
              <li className="nav-item">
                <Button
                  style={{ marginLeft: "30rem" }}
                  variant="primary"
                  onClick={() =>
                    push("/") &
                    localStorage.removeItem("token") &
                    localStorage.removeItem("CURRENTUSER") &
                    dispatch({ type: "LOGGED_STATUS", payload: false })
                  }
                >
                  Sign out
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {loading ? (
        <div style={{ margin: "30rem", fontSize: "3rem" }}>loading...</div>
      ) : (
        <>
          {
            // .filter(stuff => stuff.id === currentuser.id)

            <div className="wed-info" style={{ display: "flex" }}>
              <div key={data.id} className="uicard">
                <div className="fon">
                  <img src="https://www.fennes.co.uk/wp-content/uploads/2014/10/fennes_wedding.jpg" />
                </div>

                <div className="user">
                  {!data.profile_pic ? (
                    <img src="https://www.york.ac.uk/media/environment/images/staff/NoImageAvailableMale.jpg" />
                  ) : (
                    <img src={data.profile_pic} />
                  )}
                  {loading ? (
                    <div>fetching your data..</div>
                  ) : (
                    <div>
                      <p>
                        Name: <i style={{ opacity: "0.7" }}>{data.username}</i>
                      </p>

                      <p>
                        Location:{" "}
                        <i style={{ opacity: "0.7" }}>{data.home_location}</i>
                      </p>

                      <p>
                        Email: <i style={{ opacity: "0.7" }}>{data.email}</i>
                      </p>
                    </div>
                  )}

                  <NavLink to={`/editprofile/${data.id}`}>Edit profile</NavLink>
                  <NavLink to={`/addwedding/${data.id}`}>Add Wedding</NavLink>
                </div>
              </div>
              <div className="info">
                <NavLink to={`/plannerweddings${data.id}`}>
                  <h5>See All of you work</h5>
                </NavLink>
                <div>
                  {// .filter(weddings => weddings.planner_id == currentuser.id)
                  allWeddings.map(myWedding => (
                    <div
                      style={{
                        background: "linear-gradient(45deg, black, transparent)"
                      }}
                      key={myWedding.id}
                    >
                      <p>
                        <span style={{ fontWeight: "bolder" }}>
                          wedding name:
                        </span>{" "}
                        <span style={{ color: "red" }}>
                          {myWedding.wedding_name}
                        </span>
                      </p>

                      <p>
                        <span style={{ fontWeight: "bolder" }}>
                          wedding theme:
                        </span>{" "}
                        <span style={{ color: "red" }}>{myWedding.theme}</span>
                      </p>
                      <p>
                        <span style={{ fontWeight: "bolder" }}>
                          wedding location:
                        </span>{" "}
                        <span style={{ color: "red" }}>
                          {myWedding.wedding_location}
                        </span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        </>
      )}
    </div>
  );
};
