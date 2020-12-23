// route to get tutor info for public display
const { Tutors, Subjects, Schedules } = require("../../models");

module.exports = async (req, res, next) => {
    let tutor_id = req.params.tutor_id

    const profile = await Tutors.findOne({
    include: [{ model: Subjects }, { model: Schedules }],
    where: {
      tutor_id: tutor_id,
    },
  });

  if (!profile) {
    return res.status(404).json({ message: "No tutor found" });
  }

  const formatedProfile = profile.toJSON();
  delete formatedProfile.password;
  return res.status(200).json(formatedProfile);

};
