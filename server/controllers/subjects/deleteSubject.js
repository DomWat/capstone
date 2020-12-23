// route to delete a subject

const jwt = require("jsonwebtoken");
const { Subjects, Tutors } = require("../../models");

module.exports = async (req, res, next) => {
    let subject_id = req.params.subject_id
  try {
    const deleted = await Subjects.destroy({
      where: {
        tutor_id: req.tutor_id,
        subject_id: subject_id
      },
    });
    return res.status(204).json("Post deleted");
  } catch (e) {
    return res.status(500).json(e);
  }
};
