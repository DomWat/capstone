// import { useState, useEffect } from 'react'
import { useState } from "react";
import axios from "axios";
import { setAuthenticationHeader } from "../utils/authenticate";

const useStudentForm = (Validate, props) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    // password2: '',
    first_name: "",
    last_name: "",
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
        props.onStudentLogin();
        props.history.push("/profile");
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
        url: "https://tranquil-everglades-92280.herokuapp.com/register/student",
        method: "POST",
        data: values,
      });
      const response = await axios.post(
        "https://tranquil-everglades-92280.herokuapp.com/login/student",
        {
          email: values.email,
          password: values.password,
        }
      );
      await handleLogin(response.data);

      props.history.push("/profile");
    }
    // setIsSubmitting(true)
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useStudentForm;
