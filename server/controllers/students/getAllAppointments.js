const { Subjects, Tutors, Appointments } = require("../../models");

module.exports = async (req, res, next) => {
  const appointments = await Appointments.findAll({
    where: {
      student_id: req.student_id,
    },
    include: [
      {
        model: Subjects,
      },
      {
        model: Tutors,
      },
    ],
  });

  console.log(appointments);
  //const formatedAppointments = appointments.toJSON()
  return res.status(200).json(appointments);
};
