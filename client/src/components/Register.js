import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const LogReg = styled.div`  
display: flex;
flex-direction: column;
margin: 3rem auto;
padding: 1rem;
width: 28%;
background: #00A3FF;
box-shadow: 0px 0px 24px rgba(0, 163, 255, 0.2);
border-radius: 20px;
`

const Formo = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const H1 = styled.h1`
text-align: center;
color: white;
`

const H2 = styled.h2`
text-align: center;
color: white;
`

const Label = styled.label`
margin-bottom: 1rem;
color: white;
`

const Button = styled.button`
width: 25%;
margin: 1rem auto;
`

function NonFormikReg({errors, touched, values, isSubmitting, status}) {
  const [users, addUser] = useState();

  useEffect(()=>{
    if(status){
      addUser([...users, status])
    }
  }, [status]);



  return (
    <LogReg>
      <H1>Please Register</H1>
      <Form>
        <Formo>
        <Label>Username<br/>
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field 
            type="text" 
            name="username"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Label>Password<br/>
        {touched.password && errors.password && <p>{errors.password}</p>}
          <Field
            type="password" 
            name="password"
            placeholder="At least 7 characters"
            style={{padding: ".5rem", borderRadius: "10px"}}/>
        </Label>
        <Button disabled={isSubmitting}>Submit</Button>
        <H2>Have an Account?</H2>
        <NavLink to="/login" style={{textDecoration: "none", color: "white", fontSize: "2rem", textDecoration: "underline"}}>Login</NavLink>
        </Formo>
      </Form>
    </LogReg>
  )
}

const Register = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Must be a traditional email format")
            .required("Email field is required"),
        password: Yup.string()
            .min(7, "Password must be at least 7 characters")
            .required("Password field is required")
    }),
    handleSubmit(values, {resetForm, setSubmitting}){
        axios.post(/*"API",*/ values)
             .then(result => {
               console.log(result);
               resetForm();
               setSubmitting(false);
             })
             .catch(err=>{
               console.log(err);
               setSubmitting(false);
             })
    }
})(NonFormikReg);

export default Register;