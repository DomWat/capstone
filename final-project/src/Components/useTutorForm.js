// import { useState, useEffect } from 'react'
import { useState } from "react";
import axios from "axios";

const useTutorForm = (Validate, history) => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //console.log(values)
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = Validate(values);
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      axios({
        url: "http://localhost:3001/register/tutor",
        method: "POST",
        data: values,
      })
        .then(() => {
          console.log("Data has been sent to the server");

          history.push("/profile");
        })
        .catch(() => {
          console.log("Server error");
        });
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default useTutorForm;
