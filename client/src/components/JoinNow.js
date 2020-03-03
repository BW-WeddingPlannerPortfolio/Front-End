// import React, { useState, useEffect } from "react";
// import { Formik, Field } from "formik";
// import * as Yup from "yup";
// import { axiosWithAuth } from "../util/axiosWithAuth";
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";

// export const JoinNow = () => {
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const { push } = useHistory();
//   //
//   const handleSubmit = (values, { setStatus, resetForm }) => {
//     axiosWithAuth()
//       .post(`/api/auth/register`, values)

//       .then(res => {
//         console.log(res);
//         setStatus(res.data);
//         resetForm();
//         console.log(res, `success`);
//         // push("/login");
//       })
//       .catch(err => console.log(err))
//       .finally();
//   };

//   console.log(image);
//   return (
//     <StyledForm className="text">
//       <Formik
//         initialValues={{
//           username: "",
//           home_location: "",
//           password: "",
//           email: "",
//           file: image
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={Yup.object().shape({
//           username: Yup.string().required("Required"),
//           email: Yup.string().required("Required"),
//           home_location: Yup.string().required("Required"),
//           password: Yup.string()
//             .required("No password provided.")
//             .min(6, "Password is too short - should be 6 chars minimum.")
//             .matches(/(?=.*[0-9])/, "Password must contain a number.")
//         })}
//       >
//         {props => {
//           const {
//             values,
//             touched,
//             errors,
//             isSubmitting,
//             handleChange,
//             handleBlur,
//             handleSubmit
//           } = props;
//           return (
//             <form onSubmit={handleSubmit}>
//               <label className="signupLabel" htmlFor="text">
//                 username
//               </label>
//               <Field
//                 className="signupInput"
//                 name="username"
//                 type="text"
//                 placeholder="Enter your username"
//                 value={values.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.username && touched.username && <p>{errors.username}</p>}
//               <label className="signupLabel" htmlFor="email">
//                 email
//               </label>
//               <Field
//                 className="signupInput"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email"
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.email && touched.email && <p>{errors.email}</p>}
//               <label className="signupLabel" htmlFor="password">
//                 password
//               </label>
//               <Field
//                 className="signupInput"
//                 name="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.password && touched.password && <p>{errors.password}</p>}
//               <label className="signupLabel" htmlFor="text">
//                 location
//               </label>
//               {console.log(values.file, "value")}
//               <Field
//                 className="signupInput"
//                 name="home_location"
//                 type="text"
//                 placeholder="Enter your location"
//                 value={values.home_location}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               {errors.home_location && touched.home_location && (
//                 <p>{errors.home_location}</p>
//               )}

//               <Field required as="select" name="role" placeholder="select">
//                 <option value="" disabled defaultValue>
//                   You are a ...?
//                 </option>
//                 <option value="bride">Bride</option>
//                 <option value="planner">WeddingPlanner</option>
//                 <option value="vendor">Vendor</option>
//               </Field>
//               <button className="signupButton" type="submit">
//                 Sign up
//               </button>
//               <div>
//                 <img src={values.file} />
//               </div>
//             </form>
//           );
//         }}
//       </Formik>
//     </StyledForm>
//   );
// };

// const StyledForm = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   p {
//     position: absolute;
//     color: red;
//   }
//   label {
//     padding-top: 10px;
//   }
// `;
