import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FetchUsers } from "../actions";
import styled from "styled-components";

const Label = styled.div`  
display: flex;
flex-direction: column;
margin: 1rem auto;
padding: 1rem;
width: 80%;
background: #00A3FF;
box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
border-radius: 20px;
`

const Button = styled.button`
width: 55%;
margin: auto;
margin-left: 20%;
`
export const Login = props => {
  // const { push } = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (values, { setStatus, resetForm }) => {
    Axios.post(
      `https://wedding-planner-portfolio.herokuapp.com//api/auth/login`,
      values
    )

      .then(res => {
        setStatus(res.data);
        resetForm();
        console.log(res, `success`);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("CURRENTUSER", JSON.stringify(res.data));

        dispatch({ type: "LOGGED_STATUS", payload: true });
        dispatch({ type: "CURRENT_USER", payload: res.data });

        dispatch(FetchUsers());
        // push(`/profile`);
      })
      .catch(err => console.log(err) & alert("Invalid email or Password"))
      .finally();
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={Yup.object().shape({
        username: Yup.string().required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(6, "Password is too short - should be 6 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <Label>
              Username
            
            <input
              className="loginInput"
              name="username"
              type="text"
              placeholder="Enter your username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            </Label>
            {console.log(values, "values")}
            {errors.username && touched.username && (
              <span
                style={{ position: "absolute", top: "70px", left: "70px" }}
                className="input-feedback"
              >
                {errors.username}
              </span>
            )}
            <Label>
              Password
            
            <input
              className="loginInput"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <span
                style={{
                  position: "absolute",
                  top: "155px",
                  right: "-147px",
                  maxWidth: "1000px",
                  width: "500px"
                }}
                className="input-feedback"
              >
                {errors.password}
              </span>
            )}
            </Label>
            <br />
            <Button>
              Login
            </Button>
          </form>
        );
      }}
    </Formik>
  );
};
