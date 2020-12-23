const { Tutors, Subjects } = require("../../models");

module.exports = async (req, res, next) => {
  const where = {};

  if (req.query.subject) {
    where["subject_name"] = req.query.subject.toLowerCase();
  }

  const tutors = await Tutors.findAll({
    include: {
      model: Subjects,
      where,
      required: true,
    },
  });

  const formatedTutors = tutors.map((t) => {
    const data = t.toJSON();
    delete data.password;
    return data;
  });

  res.status(200).json(formatedTutors);
};
