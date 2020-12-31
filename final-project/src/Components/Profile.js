import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [student, setStudent] = useState({
    student: {
      Appointments: [],
    },
  });
  useEffect(() => {
    fetchStudentProfile();
  }, [student]);

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
      <div>
        <h1>
          <b>User Information</b>
        </h1>
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
        <label>
          <b>Student Photo:</b>
        </label>
        <p>{student.student.image}</p>
      </div>
      <h1>Appointment History</h1>
      {student.student.Appointments.map((appointment) => {
        return (
          <div>
            <h6>
              <b>Tutor Details</b>
            </h6>
            <p>
              Name: {appointment.Tutor.first_name} {appointment.Tutor.last_name}
            </p>
            <p>
              Email:<i> {appointment.Tutor.email}</i>
            </p>
            <h6>
              <b>Subject Details</b>
            </h6>
            <p>Subject: {appointment.Subject.subject_name}</p>
            <p>Specialty: {appointment.Subject.sub_subject_name}</p>
            <h6>
              <b>Appointment Details</b>
            </h6>
            <p>Start time: {appointment.start_time}</p>
            <p>End time: {appointment.end_time}</p>
          </div>
        );
      })}
    </>
  );
}

export default Profile;
