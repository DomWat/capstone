// import { useState, useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthenticationHeader } from "../utils/authenticate";

const useTutorForm = (Validate, props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    // password2: '',
    first_name: "",
    last_name: "",
    description: "",
    hourly_rate: 0,
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false)

  const handleLogin = async (userToken) => {
    if (userToken) {
      const token = userToken.token;
      localStorage.setItem("jsonwebtoken", token);

      // after getting the token, we can set default authentication headers for axios to include jsonwebtoken
      // Will send the token for every request user makes
      setAuthenticationHeader(token);
      //update the isAuthenticated in Redux to true
      if (token) {
        props.onAuthenticated();
        props.onTutorLogin();
        props.history.push("/tutor-profile");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //console.log(values)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = Validate(values);
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      await axios({
        url: "https://tranquil-everglades-92280.herokuapp.com/register/tutor",
        method: "POST",
        data: values,
      });
      //console.log("Data has been sent to the server");
      //logging tutor in after sign-up
      const response = await axios.post(
        "https://tranquil-everglades-92280.herokuapp.com/login/tutor",
        {
          email: values.email,
          password: values.password,
        }
      );
      await handleLogin(response.data);

      props.history.push("/tutor-profile");
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useTutorForm;
