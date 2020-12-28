// Route used to edit tutor description

// need jsonwebtoken of tutor

const { Tutors } = require("../../models");

module.exports = async (req, res, next) => {
  let tutor_id = req.tutor_id;

  const tutor = await Tutors.findOne({
    where: {
      tutor_id: tutor_id,
    },
  });

  const [rowsUpdate, [updatedDescription]] = await Tutors.update(
    {
      description: req.body.description,
    },
    {
      returning: true,
      where: {
        tutor_id: tutor.tutor_id,
      },
    }
  );

  const response = updatedDescription.toJSON();
  delete response.password;
  res.status(200).json(response);
};
