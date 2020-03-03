import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const JoinNow = ({ values, touched, errors, status }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log("status has changed!!", status);
    status && setPeople(people => [...people, status]);
  }, [status]);

  return (
    <div className="signin-form">
      <StyledForm className="text">
        <label htmlFor="name">
          {" "}
          Name
          <Field id="name" type="text" name="name" placeholder="Name" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="location">
          {" "}
          Location
          <Field
            id="location"
            type="location"
            name="location"
            placeholder="Location"
          />
          {touched.location && errors.location && (
            <p className="errors">{errors.location}</p>
          )}
        </label>
        <label htmlFor="password">
          {" "}
          Password
          <Field
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label htmlFor="email">
          {" "}
          Email
          <Field id="email" type="text" name="email" placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>

        <label htmlFor="type">
          You are a ...?
          <Field
            component="select"
            className="type-select"
            id="type"
            type="dropdown"
            name="type"
            placeholder="You are a ...?"
          >
            <option disabled>Choose an option</option>
            <option value="Bride">Bride</option>
            <option value="WeddingPlanner">Wedding Planner</option>
            <option value="Vendor">Vendor</option>
          </Field>
          {touched.type && errors.type && (
            <p className="errors">{errors.type}</p>
          )}
        </label>

        <label htmlFor="terms" className="checkbox-container">
          Terms and Conditions
          <Field
            id="terms"
            type="checkbox"
            name="terms"
            checked={values.terms}
          />
          <span className="checkmark" />
          {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p>
          )}
        </label>

        <button type="submit">Submit!</button>
      </StyledForm>
    </div>
  );
};

const FormikJoinNowForm = withFormik({
  mapPropsToValues({ name, location, password, email, type, terms }) {
    return {
      name: name || "",
      location: location || "",
      password: password || "",
      email: email || "",
      type: type || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    location: Yup.string().required(),
    password: Yup.string().required(),
    email: Yup.string().required(),
    type: Yup.string().required(),
    terms: Yup.string().required()
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios.post("https://reqres.in/api/users/", values).then(response => {
      console.log("success", response);
      setStatus(response.data);
      resetForm();
    });
  }
})(JoinNow);

export default FormikJoinNowForm;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  padding: 10px;
  font-size: 20px;
`;
