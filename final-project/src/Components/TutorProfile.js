import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../styles/StudentProfile.css";
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

  const handleAdd = () => {
    axios.post('http://localhost:3001/tutor/subject', {
      subject_name: subject.subject,
      sub_subject_name: subject.specialty
    })
    handleClose()
    fetchTutorProfile()
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

  const fetchTutorProfile = async () => {
    let response = await axios.get("http://localhost:3001/tutor/me");
    const tutorData = response.data;
    console.log(tutorData);

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

  const handleSave = () => {
    setTutor({
      ...tutor,
      notUpdating: true,
    });
  };

  return (
    <>
      <div>
        <h1 className="users-title">
          <b>User's Information</b>
        </h1>
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Edit Profile
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        <div className="photo">
          <label className="photo-title">
            <b>Tutor Photo:</b>
          </label>
          <p className="student-photo">{tutor.tutor.image}</p>
        </div>
        <div className="content">
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
          <p className="information">
            {/* {tutor.tutor.description}{" "} */}
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="standard-basic"
                label="Description"
                multiline
                value={tutor.tutor.description || " "}
                disabled={tutor.notUpdating}
              />
            </form>
          </p>
        </div>
      </div>
      <h1>Subject: </h1>
      {tutor.tutor.Subjects.map((subject) => {
        return (
          <div key={subject.subject_id}>
            {capitalize(subject.subject_name)} Specialty:{" "}
            {capitalize(subject.sub_subject_name)}
          </div>
        );
      })}
      <div>
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
      <h1>Schedule: </h1>
      {/* Mon: {tutor.tutor.Schedule.monday} */}
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Monday"
          value={tutor.tutor.Schedule.monday || " "}
          disabled={tutor.notUpdating}
        />
      </form>
      <div>
        {/* Tues: {tutor.tutor.Schedule.tuesday} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Tuesday"
            value={tutor.tutor.Schedule.tuesday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
      </div>
      <div>
        {/* Wed: {tutor.tutor.Schedule.wednesday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Wednesday"
            value={tutor.tutor.Schedule.wednesday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
      </div>
      <div>
        {/* Thur: {tutor.tutor.Schedule.thursday} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Thursday"
            value={tutor.tutor.Schedule.thursday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
      </div>
      <div>
        {/* Fri: {tutor.tutor.Schedule.friday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Friday"
            value={tutor.tutor.Schedule.friday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
      </div>
      <div>
        {/* Sat: {tutor.tutor.Schedule.saturday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Saturday"
            value={tutor.tutor.Schedule.saturday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
      </div>
      <div>
        {/* Sun: {tutor.tutor.Schedule.sunday}{" "} */}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Sunday"
            value={tutor.tutor.Schedule.sunday || " "}
            disabled={tutor.notUpdating}
          />
        </form>
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
