import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateDayjsUtils from "@date-io/dayjs";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import dayjs from "dayjs";
//import dayjsPluginUTC from "dayjs-plugin-utc";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import capitalize from "capitalize";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   "& > *": {
  //     margin: theme.spacing(1),
  //   },
  // },
  formControl: {
    margin: "8px",
    marginLeft: "0px",
    marginTop: "16px",
    marginRight: "0px",
    minWidth: "166px",
    maxWidth: "166px",
  },
}));

function DateAndTimePickers(props) {
  // for material ui button

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.history.push("/classes");
  };

  const classes = useStyles();

  const dateObj = new Date();

  const [subjectId, setSubjectId] = React.useState(
    props.subjectList[0].subject_id
  );

  const [selectedDate, setSelectedDate] = React.useState(
    dayjs(dateObj.toLocaleString("en-US", { timeZone: "America/New_York" }))
  );

  const [startTime, setStartTime] = useState(
    dayjs(selectedDate).add(1, "hour")
  );

  const [endTime, setEndTime] = useState(dayjs(selectedDate).add(2, "hour"));

  //    console.log(selectedDate)
  const handleSubjectChange = (e) => {
    setSubjectId(e.target.value);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e);
    setEndTime(dayjs(e).add(1, "hour"));
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e);
  };

  // get selectedDate in utc format
  const utcDate = dayjs(selectedDate);
  //console.log(utcDate)
  const date = dayjs(utcDate).date();
  const month = dayjs(utcDate).month();
  const year = dayjs(utcDate).year();

  const utcStartTime = dayjs(startTime)
    .set("date", date)
    .set("month", month)
    .set("year", year);

  const utcEndTime = dayjs(endTime)
    .set("date", date)
    .set("month", month)
    .set("year", year);

  console.log({
    start_time: utcStartTime.toString(),
    end_time: utcEndTime.toString(),
  });
  // checking
  // console.log(utcDate, "UTC Date");
  // console.log(utcStartTime, "UTC Start time");
  // console.log(utcEndTime, "UTC End time");

  console.log(props.subjectId, props.tutorId, "Subject and TutorID");

  // make a post call with axios
  const createAppointment = async () => {
    handleClickOpen();
    await axios.post(
      `http://localhost:3001/student/appointment/${subjectId}/${props.tutorId}`,
      {
        start_time: utcStartTime.toString(),
        end_time: utcEndTime.toString(),
      }
    );
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateDayjsUtils} className='dateTimeColumn'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl className={classes.formControl}>
              {/* <InputLabel id="demo-simple-select-label">Subject</InputLabel> */}
              <p>Subject</p>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={subjectId}
                onChange={handleSubjectChange}
              >
                {props.subjectList.map((s) => (
                  <MenuItem value={s.subject_id} className='subjectPicker'>
                    {capitalize.words(s.subject_name)} -{" "}
                    {capitalize.words(s.sub_subject_name)}
                  
                    
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
          <p>Select a Date</p>

            <DatePicker
              margin="normal"
              id="date-picker-dialog"
              // label="Select a Date"
              format="MM/DD/YYYY"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <p>Select Start Time</p>
            <TimePicker
              margin="normal"
              id="time-picker"
              // label="Select Start Time"
              name="start time"
              value={startTime}
              minutesStep={5}
              onChange={handleStartTimeChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>Select End Time</p>
            <TimePicker
              margin="normal"
              // label="Select End Time"
              name="end time"
              value={endTime}
              minutesStep={5}
              onChange={handleEndTimeChange}
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
      
      <div className={classes.root}>
        <div className='bookButtonDiv'>
        <Button variant="contained" color="primary" onClick={createAppointment} className='bookButtonDetails'
>
          Book
        </Button>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Appointment Scheduled!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" className='alert-dialog-description'>
              You're all set! Check your inbox for a confirmation email
              containing details about your upcoming tutoring session!
            </DialogContentText>
          </DialogContent>
          <DialogActions >
            <Button
              onClick={handleClose}
              color="primary"
              //href="/classes"
              autoFocus
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default DateAndTimePickers;
