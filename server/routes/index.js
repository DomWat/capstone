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
const getStudentProfile = require("../controllers/students/getProfileData");
const createTutorSchedule = require("../controllers/schedules/createSchedule");
const editTutorSchedule = require("../controllers/schedules/editSchedule")

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
  //AND will GET ALL tutors of a specific subject if subject is passed as a query parameter in url back to the server
  // (ex. "url/?subject=math")
  app.get("/all-tutors", getAllTutors);

  // route to DELETE a subject (will be used by tutor)
  app.delete("/tutor/subject/:subject_id", auth, deleteSubject);

  // route for tutor to GET info for profile (schedule, appt hist, subjects, name, email, hourly rate, payment handles, linkedIn url etc)
  app.get("/tutor/me", auth, getTutorProfile);

  // route to GET tutor info for public pages, like to get more detailed view of tutor (tutor personal info, subjects, and schedule)
  // must send tutor_id back in query params
  app.get("/tutor/:tutor_id", getPublicTutorData);

  // Route to GET private student info from their profile page
  app.get("/student/me", auth, getStudentProfile);

  // Route to CREATE a tutor's schedule/availability
  app.post("/tutor/schedule", auth, createTutorSchedule);

  // Route to EDIT a tutor's schedule/availability
  // Need to pass schedule id in the params
  app.put("/tutor/schedule", auth, editTutorSchedule);
  return app;
};
