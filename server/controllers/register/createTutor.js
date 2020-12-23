const { Tutors } = require("../../models");
const bcrypt = require("bcryptjs");

module.exports = async (req, res, next) => {
  console.log(req.body);
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let password = req.body.password;
  let hourly_rate = req.body.hourly_rate;
  let image = req.body.image;
  let description = req.body.description
  let linkedIn_url = req.body.linkedIn_url
  let venmo_handle = req.body.venmo_handle;
  let cashapp_handle = req.body.cashapp_handle;
  let paypal_handle = req.body.paypal_handle;

  // checking if tutor already exists
  const tutor = await Tutors.findOne({
    where: {
      email: email,
    },
  });

  if (tutor) {
    res.status(400).send({ error: "user already exists" });
  } else {
    // if tutor DOES NOT already exist
    // Will encrypt their password
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);

    let tutor = await Tutors.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: hash,
      hourly_rate: hourly_rate,
      image: image,
      description: description,
      linkedIn_url: linkedIn_url,
      venmo_handle: venmo_handle,
      cashapp_handle: cashapp_handle,
      paypal_handle: paypal_handle,
    });

    const user = tutor.toJSON();
    delete user.password;
    res.status(201).json(user);
  }
};
