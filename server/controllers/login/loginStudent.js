const { Students } = require("../../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  let email = req.body.email; // obtaining email from form/textbox
  let password = req.body.password; // obtaining password from form/textbox
  let student_id = ""; // will get from the database once we verify the user exists

  // checking if student already exists
  const student = await Students.findOne({
    where: {
      email: email,
    },
  });

  if (student) {
    let storedPassword = student.password;
    student_id = student.student_id;

    // have to compare both passwords, the hashed one stored when they registered,
    // and the one they entered in the textbox
    let result = await bcrypt.compare(password, storedPassword);

    if (result) {
      const loggedInUser = student.toJSON();
      delete loggedInUser.password;
      const token = jwt.sign({ student_id: student_id }, "TUTORAPPKEY");
      res.json({ token: token });
    } else {
        res.status(500).send({error: 'Something went wrong'})
    }
  } else {
      res.json({ message: "Incorrect username or password"})
  }
};
