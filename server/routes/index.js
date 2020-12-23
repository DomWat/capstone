const express = require("express");
const app = express();

const auth = require("../config/middleware/auth");

const getStatus = require("../controllers/status/get");
const createStudent = require("../controllers/register/createStudent");
const createTutor = require("../controllers/register/createTutor");
const loginStudent = require("../controllers/login/loginStudent");
const loginTutors = require("../controllers/login/loginTutors");
const createSubject = require("../controllers/subjects/createSubject");
const getAllTutors = require("../controllers/tutors/getAll");
const deleteSubject = require("../controllers/subjects/deleteSubject");
const getTutorProfile = require("../controllers/tutors/getProfileData");
const getPublicTutorData = require("../controllers/tutors/getPublicData");

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
  app.post("/tutor/create-subject", auth, createSubject);

  // route to GET ALL tutors
  //and will GET ALL tutors of a specific subject if subject is passed as a query parameter in url back to the server
  // (ex. "url/?subject=math")
  app.get("/all-tutors", getAllTutors);

  // route to DELETE a subject (will be used by tutor)
  app.delete("/tutor/subject/:subject_id", auth, deleteSubject);

  // route for tutor to GET info for profile (schedule, appt hist, subjects, name, email, hourly rate, payment handles, linkedIn url etc)
  app.get("/tutor/me", auth, getTutorProfile);

  // route to GET tutor info for public pages, like to get more detailed view of tutor (tutor personal info, subjects, and schedule)
  app.get("/tutor/:tutor_id", getPublicTutorData);
  return app;
};
