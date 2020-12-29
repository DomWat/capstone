// logic for route to get info for tutor profile page
const {
  Tutors,
  Subjects,
  Schedules,
  Appointments,
  Students,
} = require("../../models");

module.exports = async (req, res, next) => {
  const profile = await Tutors.findOne({
    include: [
      {
        model: Subjects,
      },
      { model: Schedules },
      {
        model: Appointments,
        include: [{ model: Students }, { model: Subjects }],
      },
    ],
    where: {
      tutor_id: req.tutor_id,
    },
  });

  if (!profile) {
    return res.status(404).json({ message: "No tutor found" });
  }

  const formatedProfile = profile.toJSON();
  delete formatedProfile.password;
  return res.status(200).json(formatedProfile);
};
