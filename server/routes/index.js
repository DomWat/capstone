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
const editTutorSchedule = require("../controllers/schedules/editSchedule");
const getStudentAppointments = require("../controllers/students/getAllAppointments");
const getTutorAppointments = require("../controllers/tutors/getAllAppointments");
const createComment = require("../controllers/comments/createComment");
const createAppointment = require("../controllers/appointments/createAppointment");

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
  app.post("/tutor/subject", auth, createSubject);

  // route to GET ALL tutors
  //AND will GET ALL tutors of a specific subject if subject is passed as a query parameter in url back to the server
  // (ex. "url/?subject=math")
  app.get("/all-tutors", getAllTutors);

  // route to DELETE a subject (will be used by tutor)
  // require tutor jsonwebtoken from front-end
  // require subject_id in url params
  app.delete("/tutor/subject/:subject_id", auth, deleteSubject);

  // route for tutor to GET info for profile (schedule, appt hist, subjects, name, email, hourly rate, payment handles, linkedIn url etc)
  // require tutor jsonwebtoken from front end
  app.get("/tutor/me", auth, getTutorProfile);

  // Route to GET ALL appointments for a particular student (for their profile)
  // Includes subject and tutor
  // Require student jsonwebtoken from front end
  app.get("/student/appointments", auth, getStudentAppointments);

  // Route to GET ALL appointments for a particular tutor (for their profile)
  // Includes subjects and student
  // Require tutor jsonwebtoken from front end
  app.get("/tutor/appointments", auth, getTutorAppointments);

  // route to GET tutor info for public pages, like to get more detailed view of tutor (tutor personal info, subjects, and schedule)
  // must send tutor_id back in query params
  app.get("/tutor/:tutor_id", getPublicTutorData);

  // Route to GET private student info from their profile page
  // require student jsonwebtoken from front end
  app.get("/student/me", auth, getStudentProfile);

  // Route to CREATE a tutor's schedule/availability
  // require student jsonwebtoken from front end
  app.post("/tutor/schedule", auth, createTutorSchedule);

  // Route to EDIT a tutor's schedule/availability
  // Requires tutor jsonwebtoken from front end
  // Need to pass schedule id in the params
  app.put("/tutor/schedule", auth, editTutorSchedule);

  // Route for student to CREATE a comment for a tutor
  // Will require student jsonwebtoken from front end
  // Will require tutor_id in url params from front end
  app.post("/student/comment/:tutor_id", auth, createComment);

  

  // Route for a student to CREATE an appointment with a tutor
  // Will need student's jsonwebtoken from front-end
  // Will need tutor_id sent in url params
  // Will need subject_id sent as in url params
  // send back in body start_time and end_time (so i can extract using req.body.start_time etc)
  // Will return to to front end appt details, as well as student, subject and tutor details for front end in json
  app.post("/student/appointment/:subject_id/:tutor_id", auth, createAppointment);

  return app;
};
