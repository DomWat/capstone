import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateDayjsUtils from "@date-io/dayjs";
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from "@material-ui/pickers";
import dayjs from "dayjs";
import dayjsPluginUTC from "dayjs-plugin-utc";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function DateAndTimePickers() {
  // for material ui button
  const classes = useStyles();
  dayjs.extend(dayjsPluginUTC);

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const initialTime = dayjs(selectedDate).hour();

  const [startTime, setStartTime] = useState(dayjs(initialTime).add(4, "hour"));

  const [endTime, setEndTime] = useState(dayjs(initialTime).add(5, "hour"));

  //    console.log(selectedDate)
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
  const utcDate = dayjs.utc(selectedDate).format();
  const date = dayjs(utcDate).day();
  const month = dayjs(utcDate).month();
  const year = dayjs(utcDate).year();
  const utcStartTime = dayjs
    .utc(startTime)
    .set("date", date)
    .set("month", month)
    .set("year", year);
  const utcEndTime = dayjs
    .utc(endTime)
    .set("date", date)
    .set("month", month)
    .set("year", year);

  // checking
  console.log(utcDate, "UTC Date");
  console.log(utcStartTime, "UTC Start time");
  console.log(utcEndTime, "UTC End time");

  // make a post call with axios
  const createAppointment = async () => {
    let response = await axios.post(
      "http://localhost:3001/student/appointment/27/14",
      {
        start_time: utcStartTime.toString(),
        end_time: utcEndTime.toString(),
      }
    );
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateDayjsUtils}>
        <Grid container justify="space-around">
          <DatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Select a Date"
            format="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <TimePicker
            margin="normal"
            id="time-picker"
            label="Select Start Time"
            name="start time"
            value={startTime}
            minutesStep={5}
            onChange={handleStartTimeChange}
          />

          <TimePicker
            margin="normal"
            label="Select End Time"
            name="end time"
            value={endTime}
            minutesStep={5}
            onChange={handleEndTimeChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={createAppointment}>
          Book
        </Button>
      </div>
    </>
  );
}

export default DateAndTimePickers;
