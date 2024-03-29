import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUser } from "../actions/";
import { axiosWithAuth } from "../util/axiosWithAuth";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  width: 80%;
  background: #00a3ff;
  box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
  border-radius: 20px;
`;

const Button = styled.button`
  width: 55%;
  margin: auto;
  margin-left: 20%;
`;
export const Login = props => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const currentuser = useSelector(state => state.currentuser);
  const [creds, setCreds] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`/api/auth/login`, creds)
      .then(res => {
        console.log(res, `success`);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("CURRENTUSER", JSON.stringify(res.data.planner));
        dispatch({ type: "LOGGED_STATUS", payload: true });
        dispatch({ type: "CURRENT_USER", payload: res.data.planner });
        dispatch(FetchUser(`/api/planners/${currentuser.id}`));
        push("./Profile");
      })
      .catch(err => console.log(err) & alert("Invalid email or Password"))
      .finally();
  };

  const onChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <Label>
      <form
        style={{ textAling: "center", padding: "2rem", display: "inherit" }}
        onSubmit={handleSubmit}
      >
        <label>
          username:
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={onChange}
          />
        </label>
        <label>
          passwords:
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={onChange}
          />
        </label>
        <Button type="submit">login</Button>
      </form>
    </Label>

    //   initialValues={{ username: "", password: "" }}
    //   onSubmit={handleSubmit}
    //   validationSchema={Yup.object().shape({
    //     username: Yup.string().required("Required"),
    //     password: Yup.string()
    //       .required("No password provided.")
    //       .min(6, "Password is too short - should be 6 chars minimum.")
    //       .matches(/(?=.*[0-9])/, "Password must contain a number.")
    //   })}
    // >
    //   {props => {
    //     const {
    //       values,
    //       touched,
    //       errors,
    //       handleChange,
    //       handleBlur,
    //       handleSubmit
    //     } = props;
    //     return (
    //       <form onSubmit={handleSubmit}>
    //         <Label>
    //           Username
    //           <input
    //             className="loginInput"
    //             name="username"
    //             type="text"
    //             placeholder="Enter your username"
    //             value={values.username}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //           />
    //         </Label>

    //         {errors.username && touched.username && (
    //           <span
    //             style={{ position: "absolute", top: "70px", left: "70px" }}
    //             className="input-feedback"
    //           >
    //             {errors.username}
    //           </span>
    //         )}
    //         <Label>
    //           Password
    //           <input
    //             className="loginInput"
    //             name="password"
    //             type="password"
    //             placeholder="Enter your password"
    //             value={values.password}
    //             onChange={handleChange}
    //             onBlur={handleBlur}
    //           />
    //           {errors.password && touched.password && (
    //             <span
    //               style={{
    //                 position: "absolute",
    //                 top: "155px",
    //                 right: "-147px",
    //                 maxWidth: "1000px",
    //                 width: "500px"
    //               }}
    //               className="input-feedback"
    //             >
    //               {errors.password}
    //             </span>
    //           )}
    //         </Label>
    //         <br />
    //         <Button>Login</Button>
    //       </form>
    //     );
    //   }}
    // </Formik>
  );
};
