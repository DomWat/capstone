// Route for a student to create an appointment
// Will need student's jsonwebtoken from front-end
// Will need tutor_id sent in url params
// Will need subject_id sent as in url params

const { Students, Tutors, Appointments, Subjects } = require("../../models");

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
    include: [{ model: Tutors }, { model: Subjects }, {model: Students}],
  });

  const newAppointment = fullAppointment.toJSON();
  res.status(201).json(newAppointment);
};
