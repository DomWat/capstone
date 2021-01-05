import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../styles/TutorProfile.css";
import dayjs from "dayjs";
import capitalize from "capitalize-the-first-letter";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// === Meterial ui styling (start) === //
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



// === Meterial ui styling (start) === //

function TutorProfile() {
  // for material ui
  const classes = useStyles();

  // material ui for modal
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [subject, setSubject] = useState({
    subject: '',
    specialty: ''
  })

  const handleAdd =  async() => {
    await axios.post('http://localhost:3001/tutor/subject', {
      subject_name: subject.subject,
      sub_subject_name: subject.specialty
    })
    handleClose()
     await fetchTutorProfile()
  }

  const handleOnChange = (e) => {
    setSubject({
      ...subject,
      [e.target.name]: e.target.value
    })
  }

  const [tutor, setTutor] = useState({
    tutor: {
      Appointments: [],
      Schedule: {},
      Subjects: [],
    },
    hasLoaded: false,
  });
  useEffect(() => {
    fetchTutorProfile();
  }, [subject]);

  // state for description
  const [description, setDescription] = useState(tutor.tutor.description);

  // state for schedule
  const [schedule, setSchedule] = useState({
    monday: tutor.tutor.Schedule.monday,
    tuesday: tutor.tutor.Schedule.tuesday,
    wednesday: tutor.tutor.Schedule.wednesday,
    thursday: tutor.tutor.Schedule.thursday,
    friday: tutor.tutor.Schedule.friday,
    saturday: tutor.tutor.Schedule.saturday,
    sunday: tutor.tutor.Schedule.sunday,
  });

  const fetchTutorProfile = async () => {
    let response = await axios.get("http://localhost:3001/tutor/me");
    const tutorData = response.data;
    console.log(tutorData);

    // setting description to corresponding values on load
    setDescription(tutorData.description);

    //setting schedule to values on load
    setSchedule({
      monday: tutorData.Schedule.monday,
      tuesday: tutorData.Schedule.tuesday,
      wednesday: tutorData.Schedule.wednesday,
      thursday: tutorData.Schedule.thursday,
      friday: tutorData.Schedule.friday,
      saturday: tutorData.Schedule.saturday,
      sunday: tutorData.Schedule.sunday,
    });

    setTutor({
      ...tutor,
      tutor: tutorData,
      notUpdating: true,
    });
  };

  // if (!tutor.hasLoaded) {
  //   return <p>Loading...</p>;
  // }

  const handleEdit = () => {
    setTutor({
      ...tutor,
      notUpdating: false,
    });
  };

  const handleSave = async () => {
    setTutor({
      ...tutor,
      notUpdating: true,
    });

    // make axios call to update the description
    await axios.put("http://localhost:3001/tutor/description", {
      description: description,
    });

    // make axios call to update the schedule
    await axios.put("http://localhost:3001/tutor/schedule", {
      monday: schedule.monday,
      tuesday: schedule.tuesday,
      wednesday: schedule.wednesday,
      thursday: schedule.thursday,
      friday: schedule.friday,
      saturday: schedule.saturday,
      sunday: schedule.sunday
    })
  };

  // handleDescriptionEdit function
  // Will need to update state with new values
  const handleDescriptionEdit = (e) => {
    setDescription(e.target.value);
  };
  // handleDescriptionEdit function
  // Will need to update state with new values
  const handleScheduleEdit = (e) => {
    setSchedule({
      ...schedule,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="tutor-container">
        <h1 className="tutor-information">
          <b>User's Information</b>
        </h1>
        <div className="tutor-button">
        <Button className="edit-profile"variant="contained" color="primary" onClick={handleEdit}>
          Edit Profile
        </Button>
        <Button ClassName="save-profile"variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        </div>
        {/* <div className="photo"> */}
          {/* <label className="photo-title"> */}
            {/* <b>Tutor Photo:</b> */}
          {/* </label> */}
          {/* <p className="student-photo">{tutor.tutor.image}</p> */}
        {/* </div> */}
        <div className="tutor-content">
          <label className="users-information">
            <b>Name:</b>
          </label>
          <p className="information">
            {capitalize(`${tutor.tutor.first_name}`)}
          </p>
          <label className="users-information">
            <b>Last Name:</b>
          </label>
          <p className="information">
            {capitalize(`${tutor.tutor.last_name}`)}
          </p>
          <label className="users-information">
            <b>Email:</b>
          </label>
          <p className="information">{tutor.tutor.email}</p>
          {/* <label className="users-information">
            <b>Description:</b>
          </label> */}
          <div className="tutor-description">
          <p className="information">
            {/* {tutor.tutor.description}{" "} */}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Description"
                multiline
                value={description || " "}
                disabled={tutor.notUpdating}
                onChange={handleDescriptionEdit}
              />
            </form>
          </p>
          </div>
        </div>
      </div>
      <div className="tutor-subject">
      <h1>Subject: </h1>
      {tutor.tutor.Subjects.map((subject) => {
        return (
          <div key={subject.subject_id}>
            {capitalize(subject.subject_name)} Specialty:{" "}
            {capitalize(subject.sub_subject_name)}
          </div>
        );
      })}
      </div>
      <div className="add-button">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add a Subject!</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="subject"
              label="Subject"
              type="email"
              name="subject"
              onChange={handleOnChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="specialty"
              label="Specialty"
              type="email"
              name="specialty"
              onChange={handleOnChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose, handleAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="schedule">
      <h1>Schedule: </h1>
      {/* Mon: {tutor.tutor.Schedule.monday} */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Monday"
          name="monday"
          value={schedule.monday || " "}
          disabled={tutor.notUpdating}
          onChange={handleScheduleEdit}
        />
      </form>
      <div>
        {/* Tues: {tutor.tutor.Schedule.tuesday} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Tuesday"
            name="tuesday"
            value={schedule.tuesday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      <div>
        {/* Wed: {tutor.tutor.Schedule.wednesday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Wednesday"
            name="wednesday"
            value={schedule.wednesday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      <div>
        {/* Thur: {tutor.tutor.Schedule.thursday} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Thursday"
            name="thursday"
            value={schedule.thursday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      <div>
        {/* Fri: {tutor.tutor.Schedule.friday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Friday"
            name="friday"
            value={schedule.friday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      <div>
        {/* Sat: {tutor.tutor.Schedule.saturday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Saturday"
            name="saturday"
            value={schedule.saturday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      <div>
        {/* Sun: {tutor.tutor.Schedule.sunday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Sunday"
            name="sunday"
            value={schedule.sunday || " "}
            disabled={tutor.notUpdating}
            onChange={handleScheduleEdit}
          />
        </form>
      </div>
      </div>
      <h1 className="appointment-title">
        <b>Appointment History</b>
      </h1>
      {tutor.tutor.Appointments.map((appointment) => {
        return (
          <div className="Container-2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Student Name:</th>

                  <th>Student E-Mail:</th>
                  <th>Subject:</th>
                  {/* <th>Specialty:</th> */}
                  <th>Date:</th>
                  <th>Start Time:</th>
                  <th>End Time:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {capitalize(appointment.Student.first_name)}{" "}
                    {capitalize(appointment.Student.last_name)}
                  </td>
                  <td>
                    <i> {appointment.Student.email}</i>
                  </td>
                  <td>
                    {capitalize(appointment.Subject.subject_name)} (
                    {capitalize(appointment.Subject.sub_subject_name)})
                  </td>
                  {/* <td>{appointment.Subject.sub_subject_name}</td> */}
                  <td>{dayjs(appointment.start_time).format("MM-DD-YYYY")}</td>
                  <td>{dayjs(appointment.start_time).format("h:mm A")}</td>
                  <td>{dayjs(appointment.end_time).format("h:mm A")}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        );
      })}
    </>
  );
}

export default TutorProfile;
