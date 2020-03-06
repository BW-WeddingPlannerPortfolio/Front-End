import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeddingData } from "../actions";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const SinglePlanner = ({ match }) => {
  const dispatch = useDispatch();
  const plannersData = useSelector(state => state.plannersData);
  const loading = useSelector(state => state.loading);
  const id = match.params.id;
  // console.log(plannersData);
  useEffect(() => {
    dispatch(getWeddingData(`/api/weddings/${id}`));
  }, [plannersInfo, dispatch]);
  console.log(plannersData);
  const useStyles = makeStyles({
    root: {
      maxWidth: 500,
      height: 300,
      margin: "0 auto",
      marginTop: "15rem"
    }
  });
  const classes = useStyles();
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
            </ul>
          </div>
        </div>
      </nav>

      <div>
        {plannersData.map(
          user => (
            <Card key={user.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={user.wedding_photo}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {user.wedding_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  <NavLink to={`/plannersinfo/${user.id}`}>
                    Learn More about this Planner.
                  </NavLink>
                </Button>
              </CardActions>
            </Card>
            // <StyledDiv>
            //   <StyledH2>{user.wedding_name}</StyledH2>
            //   <div>
            //     <StyledImg src={user.wedding_photo} />
            //     <StyledTAL>
            //       <p>Theme - {user.theme}</p>
            //       <p>Location - {user.wedding_location}</p>
            //     </StyledTAL>
            //     <StyledDesc>About - {user.description}</StyledDesc>
            //   </div>
            //   <NavLink
            //     style={{ fontSize: "2rem" }}
            //     to={`/plannersinfo/${user.id}`}
            //   >
            //     See all the work they did.
            //   </NavLink>
            // </StyledDiv>
          )
          // )
        )}
      </div>
    </div>
  );
};

// const StyledDiv = styled.div`
//   display: flex;
//   background-color: #8ec5fc;
//   background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
//   justify-content: center;
//   flex-direction: column;
//   height: 100vh;
//   margin: 80px;
//   border-radius: 5px;
//   margin-top: 150px;
// `;
// const StyledH2 = styled.h2`
//   display: flex;
//   justify-content: center;
//   font-size: 30px;
//   width: 100%;
//   margin-top: 20px;
//   padding-top: 40px;
// `;
// const StyledImg = styled.img`
//   display: flex;
//   justify-content: center;
//   width: 40%;
//   height: 50vh;
//   border-radius: 10px;
//   margin: 50px;
//   margin-left: 350px;
// `;
// const StyledDesc = styled.p`
//   padding: 20px;
//   text-direction: center;
// `;
// const StyledTAL = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;
