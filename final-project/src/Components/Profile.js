import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/StudentProfile.css'
import Table from 'react-bootstrap/Table'

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
    let response = await axios.get("http://localhost:3001/student/me");
    const studentData = response.data;
    console.log(studentData);

    setStudent({
      ...student,
      student: studentData,
    });
  };

  return (
    <>
      <div className="Container">
        <h1 className="title">
          <b>Student Details</b>
        </h1>
        <div className="student-details">
        <label>
          <b>Name:</b>
        </label>
        <p>{student.student.first_name}</p>
        <label>
          <b>Last Name:</b>
        </label>
        <p>{student.student.last_name}</p>
        <label>
          <b>Email:</b>
        </label>
        <p>{student.student.email}</p>
        </div>
        <div className="student-photo">
        <label>
          <b>Student Photo:</b>
        </label>
        <p>{student.student.image}</p>
        </div>
      </div>
      <h1 className="title-appo"><b>Appointment History</b></h1>
      {student.student.Appointments.map((appointment) => {
        return (
          <div className="container-2">
    


  <Table striped bordered hover size="md">
  <thead>
    <tr>
      <th>Tutor's Name:</th>
      <th>Tutor's Email:</th>
      <th>Subject:</th>
      <th>Specialty:</th>
      <th>Date:</th>
      <th>Start Time:</th>
      <th>End Time:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td> {appointment.Tutor.first_name} {appointment.Tutor.last_name}</td>
        <td><i> {appointment.Tutor.email}</i></td>
        <td>{appointment.Subject.subject_name}</td>
        <td>{appointment.Subject.sub_subject_name}</td>
        <td></td>
        <td>{appointment.start_time}</td>
        <td>{appointment.end_time}</td>
    </tr>
  </tbody>
</Table>
            
            {/* <h6> */}
              {/* <b>Tutor Details</b> */}
            {/* </h6> */}
            {/* <p> */}
              {/* Name: {appointment.Tutor.first_name} {appointment.Tutor.last_name} */}
            {/* </p> */}
            {/* <p> */}
              {/* Email:<i> {appointment.Tutor.email}</i> */}
            {/* </p> */}
            {/* <h6> */}
              {/* <b>Subject Details</b> */}
            {/* </h6> */}
            {/* <p>Subject: {appointment.Subject.subject_name}</p> */}
            {/* <p>Specialty: {appointment.Subject.sub_subject_name}</p> */}
            {/* <h6> */}
              {/* <b>Appointment Details</b> */}
            {/* </h6> */}
            {/* <p>Start time: {appointment.start_time}</p> */}
            {/* <p>End time: {appointment.end_time}</p> */}
          </div>
        );
      })}
    </>
  );
}
 


export default Profile;
