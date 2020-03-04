import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../actions";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SinglePlanner = ({ match }) => {
  const dispatch = useDispatch();
  const wed = useSelector(state => state.data);
  const id = match.params.id;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
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
        {wed.map(
          user =>
            user.id === Number(id) && (
              <StyledDiv>
                <StyledH2>{user.wedding_name}</StyledH2>
                <div>
                  <StyledImg
                    key={user.id}
                    alt={user.wedding_name}
                    src={user.wedding_photo}
                  />
                  <StyledTAL>
                    <p>Theme: {user.theme}</p>
                    <p>Location: {user.wedding_location}</p>
                  </StyledTAL>
                  <StyledDesc>About: {user.description}</StyledDesc>
                </div>
              </StyledDiv>
            )
        )}
      </div>
    </div>
  );
};

const StyledDiv = styled.div`
  display: flex;
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  margin: 80px;
  border-radius: 5px;
  margin-top: 150px;
`;
const StyledH2 = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 30px;
  width: 100%;
  margin-top: 20px;
`;
const StyledImg = styled.img`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 50vh;
  border-radius: 10px;
  margin: 50px;
`;
const StyledDesc = styled.p`
  padding: 20px;
  text-direction: center;
`;
const StyledTAL = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
