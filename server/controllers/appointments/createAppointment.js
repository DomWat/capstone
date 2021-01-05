// Route for a student to create an appointment
// Will need student's jsonwebtoken from front-end
// Will need tutor_id sent in url params
// Will need subject_id sent as in url params

//import emailjs from "emailjs-com";

const { Students, Tutors, Appointments, Subjects } = require("../../models");
const capitalize = require("capitalize-the-first-letter");
const dayjs = require("dayjs");
const axios = require("axios");
require("dotenv").config(); 
const utc = require("dayjs/plugin/utc"); // dependent on utc plugin
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

module.exports = async (req, res, next) => {
  let tutor_id = req.params.tutor_id;
  let subject_id = req.params.subject_id;
  // from jsonwebtoken
  let student_id = req.student_id;
  let start_time = req.body.start_time;
  let end_time = req.body.end_time;

  if (!req.student_id) {
    res.status(422).send({ error: "Missing Student Id" });
    next();
  }

  const appointment = await Appointments.create({
    tutor_id: tutor_id,
    student_id: student_id,
    subject_id: subject_id,
    start_time: start_time,
    end_time: end_time,
  });

  const fullAppointment = await Appointments.findOne({
    where: {
      appointment_id: appointment.appointment_id,
    },
    include: [{ model: Tutors }, { model: Subjects }, { model: Students }],
  });

  const tutorPayload = {
    tutor_email: fullAppointment.Tutor.email,
    tutor_first_name: capitalize(fullAppointment.Tutor.first_name),
    student_email: fullAppointment.Student.email,
    student_first_name: capitalize(fullAppointment.Student.first_name),
    student_last_name: capitalize(fullAppointment.Student.last_name),
    subject_name: capitalize(fullAppointment.Subject.subject_name),
    sub_subject_name: capitalize(fullAppointment.Subject.sub_subject_name),
    date_scheduled: dayjs(fullAppointment.start_time)
      .tz("America/New_York")
      .format("MMMM D, YYYY"),
    start_time: dayjs(fullAppointment.start_time)
      .tz("America/New_York")
      .format("h:mm A"),
    end_time: dayjs(fullAppointment.end_time)
      .tz("America/New_York")
      .format("h:mm A EST"),
  };
  const studentPayload = {
    student_email: fullAppointment.Student.email,
    student_first_name: capitalize(fullAppointment.Student.first_name),
    tutor_first_name: capitalize(fullAppointment.Tutor.first_name),
    tutor_last_name: capitalize(fullAppointment.Tutor.last_name),
    tutor_email: fullAppointment.Tutor.email,
    subject_name: capitalize(fullAppointment.Subject.subject_name),
    sub_subject_name: capitalize(fullAppointment.Subject.sub_subject_name),
    date_scheduled: dayjs(fullAppointment.start_time)
      .tz("America/New_York")
      .format("MMMM DD, YYYY"),
    start_time: dayjs(fullAppointment.start_time)
      .tz("America/New_York")
      .format("h:mm A"),
    end_time: dayjs(fullAppointment.end_time)
      .tz("America/New_York")
      .format("h:mm A EST"),
  };

  const tutorEmailReq = axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      template_id: process.env.EMAILJS_TUTOR_TEMPLATE_ID,
      service_id: process.env.EMAILJS_SERVICE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: tutorPayload,
    }
  );
  const studentEmailReq = axios.post(
    "https://api.emailjs.com/api/v1.0/email/send",
    {
      template_id: process.env.EMAILJS_STUDENT_TEMPLATE_ID,
      service_id: process.env.EMAILJS_SERVICE_ID,
      user_id: process.env.EMAILJS_USER_ID,
      template_params: studentPayload,
    }
  );

  await Promise.all([tutorEmailReq, studentEmailReq]);

  const newAppointment = fullAppointment.toJSON();
  res.status(201).json(newAppointment);
};
