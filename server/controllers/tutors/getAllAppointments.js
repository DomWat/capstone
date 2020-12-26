// logic to get all the appointments for the tutor who is logged in.
// Will view in their profile
const { Students, Subjects, Appointments } = require("../../models");

module.exports = async (req, res, next) => {
  console.log("HERE!!!!");
  const appointments = await Appointments.findAll({
    where: {
      tutor_id: req.tutor_id,
    },
    include: [
      {
        model: Subjects,
      },
      {
        model: Students,
      },
    ],
  });
  return res.status(200).json(appointments);
};
