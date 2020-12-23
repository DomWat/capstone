const { Schedules, Tutors } = require("../../models");

module.exports = async (req, res, next) => {
  let monday = req.body.monday;
  let tuesday = req.body.tuesday;
  let wednesday = req.body.wednesday;
  let thursday = req.body.thursday;
  let friday = req.body.friday;
  let saturday = req.body.saturday;
  let sunday = req.body.sunday;

  if (!req.tutor_id) {
      res.status(422).send({ error: "Missing Tutor Id" });
      next();
  }

  
};
