const express = require("express");
const app = express();

const getStatus = require("../controllers/status/get");
const createStudent = require("../controllers/register/createStudent");
const createTutor = require("../controllers/register/createTutor");
const loginStudent = require("../controllers/login/loginStudent");
const loginTutors = require("../controllers/login/loginTutors")

module.exports = () => {
  app.get("/status", getStatus);

  // route to create a student
  app.post("/register/student", createStudent);

  // route to create a tutor
  app.post("/register/tutor", createTutor);

  // route to login a student
  app.post("/login/student", loginStudent);

  //route to login a tutor
  app.post("/login/tutor", loginTutors)

  return app;
};
