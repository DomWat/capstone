import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import "../styles/StudentProfile.css";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";
import capitalize from "capitalize";

function Profile() {
  const [student, setStudent] = useState({
    student: {
      Appointments: [],
    },
  });
  useEffect(() => {
    fetchStudentProfile();
  }, []);

  const fetchStudentProfile = async () => {
    let response = await axios.get(
      "https://tranquil-everglades-92280.herokuapp.com/student/me"
    );
    const studentData = response.data;
    console.log(studentData);

    setStudent({
      ...student,
      student: studentData,
    });
  };

  return (
    <div className="wholeStudentProf">
      <div className="studentTop">
        <h1 className="studentTitle">
          <b>Hi, {capitalize.words(`${student.student.first_name || ""}`)}!</b>
        </h1>
        {/* <div className="photo">
        <label className="photo-title"> */}
        {/* <b>Student Photo:</b> */}
        {/* </label> */}
        {/* <p className = "student-photo">{student.student.image}</p> */}
        {/* </div> */}

        <div className="studentNameInfo">
          <div className="studentNameItem">
            <span>Name:</span>
            <p className="information">
              &nbsp;{capitalize.words(`${student.student.first_name}`)}&nbsp;
              {capitalize.words(`${student.student.last_name}`)}
            </p>
          </div>
          {/* <p className="information">{capitalize.words(`${student.student.first_name}`)}&nbsp; {capitalize.words(`${student.student.last_name}`)}</p> */}
          {/* <label className="users-information">
            <b>Last Name:</b>
            </label> */}
          {/* <p className= "information">{capitalize.words(`${student.student.last_name}`)}</p> */}
          <div className="studentNameItem">
            <span>Email:</span>
            <p className="information">&nbsp;{student.student.email}</p>
          </div>
          {/* <p className="information">{student.student.email}</p> */}
        </div>
      </div>
      {student.student.Appointments.length != 0 ? (
        <h1 className="appointment-title-student">
          <b>Tutoring Sessions</b>
        </h1>
      ) : (
        <p className="appointment-title-alt">
          You haven't scheduled any lessons yet. Head to our&nbsp;
          <NavLink to="/classes" className="studentNav">
            Find Tutors
          </NavLink>
          &nbsp;page to start learning!
        </p>
      )}
      {student.student.Appointments.map((appointment) => {
        return (
          <div className="Container-2">
            {/* <Table striped bordered hover size="sm" className="table">
              <thead className="table-heading">
                <tr>
                  <th>Tutor Name:</th>
                  <th>Tutor's E-Mail:</th>
                  <th>Subject:</th>
                  <th>Date:</th>
                  <th>Start Time:</th>
                  <th>End Time:</th>
                </tr>
              </thead>
              <tbody className="table-content">
                <tr>
                  <td>
                    {capitalize.words(appointment.Tutor.first_name)}{" "}
                    {capitalize.words(appointment.Tutor.last_name)}
                  </td>
                  <td>
                    <i> {appointment.Tutor.email}</i>
                  </td>
                  <td>
                    {capitalize.words(appointment.Subject.subject_name)} (
                    {capitalize.words(appointment.Subject.sub_subject_name)})
                  </td>
                  <td>{dayjs(appointment.start_time).format("MM-DD-YYYY")}</td>
                  <td>{dayjs(appointment.start_time).format("h:mm A")}</td>
                  <td>{dayjs(appointment.end_time).format("h:mm A")}</td>
                </tr>
              </tbody>
            </Table> */}
            <div className="studentProfileLessonTableContainer">
              <div className="studentProfileLessonTable">
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">Tutor name:</div>
                  <div className="studentProfileTableData">
                    {capitalize.words(appointment.Tutor.first_name)}{" "}
                    {capitalize.words(appointment.Tutor.last_name)}
                  </div>
                </div>
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">Tutor email:</div>
                  <div className="studentProfileTableData">
                    {appointment.Tutor.email}
                  </div>
                </div>
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">Subject:</div>
                  <div className="studentProfileTableData">
                    {capitalize.words(appointment.Subject.subject_name)} (
                    {capitalize.words(appointment.Subject.sub_subject_name)})
                  </div>
                </div>
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">Date:</div>
                  <div className="studentProfileTableData">
                    {dayjs(appointment.start_time).format("MM-DD-YYYY")}
                  </div>
                </div>
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">Start time:</div>
                  <div className="studentProfileTableData">
                    {dayjs(appointment.start_time).format("h:mm A")}
                  </div>
                </div>
                <div className="studentProfileLessonItem">
                  <div className="studentProfileTableLabel">End time:</div>
                  <div className="studentProfileTableData">
                    {dayjs(appointment.end_time).format("h:mm A")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Profile;

// {/* <h6> */}
// {/* <b>Tutor Details</b> */}
// {/* </h6> */}
// <p>
// {/* Name: {appointment.Tutor.first_name} {appointment.Tutor.last_name} */}
// {/* </p> */}
// <p>
// {/* Email:<i> {appointment.Tutor.email}</i> */}
// {/* </p> */}
// <h6>
// {/* <b>Subject Details</b> */}
// {/* </h6> */}
// <p>Subject: {appointment.Subject.subject_name}</p>
// <p>Specialty: {appointment.Subject.sub_subject_name}</p>
// <h6>
// {/* <b>Appointment Details</b> */}
// {/* </h6> */}
// {/* // <p>Start time: {appointment.start_time}</p> */}
// {/* // <p>End time: {appointment.end_time}</p> */}
