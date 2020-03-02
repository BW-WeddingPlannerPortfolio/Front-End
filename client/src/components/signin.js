import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SignInForm = ({ values, touched, errors, status }) => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log("status has changed!!", status);
    status && setPeople(people => [...people, status]);
  }, [status]);

  return (
    <div className="signin-form">
      <Form>
        <label htmlFor="name">
          {" "}
          Name
          <Field
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
        </label>
        <label htmlFor="username">
          {" "}
          Username
          <Field 
          id="username" 
          type="text" 
          name="username" 
          placeholder="Username" />
          {touched.username && errors.username && (
            <p className="errors">{errors.username}</p>
          )}
        </label>
        <label htmlFor="password">
          {" "}
          Password
          <Field 
          id="password" 
          type="password" 
          name="password" 
          placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>
        <label htmlFor="email">
          {" "}
          Email
          <Field 
          id="email" 
          type="text" 
          name="email" 
          placeholder="Email" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>

        <label htmlFor="type">
          Which are you?
          <Field
            component="select"
            className="type-select"
            id="type"
            type="dropdown"
            name="type"
            placeholder="Which are you?"
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
      </Form>
      <pre>{JSON.stringify(values, null, 2)}</pre>
      {people.map(person => (
        <ul key={person.id}>
          <li>Name: {person.name}</li>
          <li>Username: {person.username}</li>
          <li>Password: {person.password}</li>
          <li>Email: {person.email}</li>
          <li>Type: {person.type}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikSignInForm = withFormik({
  mapPropsToValues({ name, username, password, email, type, terms }) {
    return {
      name: name || "",
      username: username || "",
      password: password || "",
      email: email || "",
      type: type || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    username: Yup.string().required(),
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
})(SignInForm);

export default FormikSignInForm;
