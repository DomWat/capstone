import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table"
import '../styles/StudentProfile.css'

function TutorProfile() {
  const [tutor, setTutor] = useState({
    tutor: {
      Appointments: [],
      Schedule: {},
      Subjects: []
    },
  });
  useEffect(() => {
    fetchTutorProfile();
  }, []);

  const fetchTutorProfile = async () => {
    let response = await axios.get("http://localhost:3001/tutor/me");
    const tutorData = response.data;
    console.log(tutorData);

    setTutor({
      ...tutor,
      tutor: tutorData,
    });
  };

  return (
    <>
      <div>
        <h1 className="users-title">
          <b>User's Information</b>

        </h1>
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
          <p className="information">{tutor.tutor.first_name}</p>
          <label className="users-information">
            <b>Last Name:</b>
          </label>
          <p className="information">{tutor.tutor.last_name}</p>
          <label className="users-information">
            <b>Email:</b>
          </label>
          <p className="information">{tutor.tutor.email}</p>
          <label className="users-information">
            <b>Description:</b>
          </label>
          <p className="information">{tutor.tutor.description}</p>
        </div>
      </div>
      <h1>Subject: </h1>
      {tutor.tutor.Subjects.map((subject) => {
        return <div key = {subject.subject_id}>{subject.subject_name} Specialty: {subject.sub_subject_name}</div>
      })}
      <h1>Schedule: </h1>
      Mon: {tutor.tutor.Schedule.monday}
      Tues: {tutor.tutor.Schedule.tuesday}
      Wed: {tutor.tutor.Schedule.wednesday}
      Thur: {tutor.tutor.Schedule.thursday}
      Fri: {tutor.tutor.Schedule.friday}
      Sat: {tutor.tutor.Schedule.saturday}
      Sun: {tutor.tutor.Schedule.sunday}
      <h1 className='appointment-title'><b>Appointment History</b></h1>
      {tutor.tutor.Appointments.map((appointment) => {
        return (
          <div className="Container-2">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Tutor's  First Name:</th>
                  <th>Tutor's Last Name:</th>
                  <th>Tutor's E-Mail:</th>
                  <th>Subject:</th>
                  <th>Specialty:</th>
                  <th>Date:</th>
                  <th>Start Time:</th>
                  <th>End Time:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{appointment.Student.first_name} </td>
                  <td>{appointment.Student.last_name}</td>
                  <td><i> {appointment.Student.email}</i></td>
                  <td>{appointment.Subject.subject_name}</td>
                  <td>{appointment.Subject.sub_subject_name}</td>
                  <td></td>
                  <td>{appointment.start_time}</td>
                  <td>{appointment.end_time}</td>
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
