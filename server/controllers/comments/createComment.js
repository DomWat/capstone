const { Students, Tutors, Comments } = require("../../models");

module.exports = async (req, res, next) => {
  let tutor_id = req.params.tutor_id;
  let title = req.body.title;
  let body = req.body.body;

  if (!req.student_id) {
    res.status(422).send({ error: "Missing Student Id" });
    next();
  }

  const comment = await Comments.create({
    tutor_id: tutor_id,
    title: title,
    body: body,
    student_id: req.student_id,
  });

  const fullComment = await Comments.findOne({
    where: {
      comment_id: comment.comment_id,
    },
    include: [{ model: Tutors }, { model: Students }],
  });

  //   console.log(fullComment);
  const newComment = fullComment.toJSON();
  res.status(201).json(newComment);
};
