const { Schedules, Tutors } = require("../../models");

// need student id and schedule id

module.exports = async (req, res, next) => {
  let tutor_id = req.tutor_id;

  const schedule = await Schedules.findOne({
    where: {
      tutor_id: tutor_id,
    },
  });

  const [rowsUpdate, [updatedSchedule]] = await Schedules.update(
    {
      monday: req.body.monday,
      tuesday: req.body.tuesday,
      wednesday: req.body.wednesday,
      thursday: req.body.thursday,
      friday: req.body.friday,
      saturday: req.body.saturday,
      sunday: req.body.sunday,
    },
    {
      returning: true,
      where: {
        schedule_id: schedule.schedule_id,
      },
    }
  );

  
  const response = updatedSchedule.toJSON()
  res.status(200).json(response);
};
