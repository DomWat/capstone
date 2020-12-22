const express = require("express");
const app = express();

const auth = require('../config/middleware/auth');

const getStatus = require("../controllers/status/get");
const createStudent = require("../controllers/register/createStudent");
const createTutor = require("../controllers/register/createTutor");
const loginStudent = require("../controllers/login/loginStudent");
const loginTutors = require("../controllers/login/loginTutors");
const createSubject = require("../controllers/subjects/createSubject");

module.exports = () => {
  app.get("/status", getStatus);

  // route to create a student
  app.post("/register/student", createStudent);

  // route to create a tutor
  app.post("/register/tutor", createTutor);

  // route to login a student
  app.post("/login/student", loginStudent);

  // route to login a tutor
  app.post("/login/tutor", loginTutors);

  // route to create a subject
  // client side MUST send jsonwebtoken in authorization headers to server in
  // axios.post request
  // STEPS EXPLAINED IN 12/7 lecture at 1:10 timestamp
  // first get jsonwebtoken from localStorage like const token = localStorage.getItem('jsonwebtoken')
  // like:  axios.post('url', {headers: {'authorization': `Bearer ${token}` } })
  app.post("/create-subject", auth, createSubject);

  return app;
};
