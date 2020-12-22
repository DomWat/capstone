const jwt = require("jsonwebtoken");
const { Subjects, Tutors } = require("../../models");

module.exports = async (req, res, next) => {
  let subject_name = req.body.subject_name.toLowerCase();
  let sub_subject_name = req.body.sub_subject_name.toLowerCase();

  if (!req.tutor_id) {
    res.status(422).send({ error: "Missing Tutor Id" });
    next();
  }

  // change from student_id to tutor_id
  const newSubject = await Subjects.findOrCreate({
    where: {
      subject_name: subject_name,
      sub_subject_name: sub_subject_name,
      tutor_id: req.tutor_id,
    },
  });
  console.log(newSubject);
  const result = newSubject[0].toJSON();
  res.status(201).json(result);
};
