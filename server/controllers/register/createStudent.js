const { Students } = require("../../models");
const bcrypt = require("bcryptjs");

module.exports =  async (req, res, next) => {
  console.log(req.body)
  let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let password = req.body.password;
    let image = req.body.image;

    // checking if student already exists
    const student = await Students.findOne({
      where: {
        email: email,
      },
    });

    if (student) {
      res.status(400).send({ error: "user already exists" });
    } else {
      // if student DOES NOT already exist
      // Will encrypt their password
      const salt = await bcrypt.genSaltSync(10);
      const hash = await bcrypt.hashSync(password, salt);

      let student = await Students.create({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: hash,
        image: image,
      });

      const user = student.toJSON();
      delete user.password;
      res.status(201).json(user);
    }
};
