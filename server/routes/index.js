const express = require("express");
const app = express();

const getStatus = require("../controllers/status/get");
const createStudent = require("../controllers/register/createStudent");
const createTutor = require("../controllers/register/createTutor");

module.exports = () => {
  app.get("/status", getStatus);

  // route to create a student
  app.post("/register/student", createStudent);

  // route to create a tutor
  app.post("/register/tutor", createTutor);

  return app;
};
