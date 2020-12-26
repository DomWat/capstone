// logic for route to get info for student profile page
const { Students, Subjects, Schedules, Appointments } = require("../../models");

module.exports = async (req, res, next) => {
  const profile = await Students.findOne({
    include: {
      model: Appointments,
    },
    where: {
      student_id: req.student_id,
    },
  });

  if (!profile) {
      return res.status(404).json({message: "No tutor found"})
  }

  const formatedProfile = profile.toJSON()
  delete formatedProfile.password
  return res.status(200).json(formatedProfile)

};
