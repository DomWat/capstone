import { useEffect, useState } from "react";
import axios from "axios";

function TutorProfile() {
  const [tutor, setTutor] = useState({
    student: {
      Appointments: [],
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
      <div>
        <h1>working?</h1>
        <p>{tutor.tutor.first_name}</p>
      </div>
    // <>
    //   <div>
    //     <h1>
    //       <b>User Information</b>
    //     </h1>
    //     <label>
    //       <b>Name:</b>
    //     </label>
    //     <p>{tutor.tutor.first_name}</p>
    //     <label>
    //       <b>Last Name:</b>
    //     </label>
    //     <p>{tutor.tutor.last_name}</p>
    //     <label>
    //       <b>Email:</b>
    //     </label>
    //     <p>{tutor.tutor.email}</p>
    //     <label>
    //       <b>Student Photo:</b>
    //     </label>
    //     <p>{tutor.tutor.image}</p>
    //   </div>
    //   <h1>Appointment History</h1>
    //   {student.student.Appointments.map((appointment) => {
    //     return (
    //       <div>
    //         <h6>
    //           <b>Tutor Details</b>
    //         </h6>
    //         <p>
    //           Name: {appointment.Tutor.first_name} {appointment.Tutor.last_name}
    //         </p>
    //         <p>
    //           Email:<i> {appointment.Tutor.email}</i>
    //         </p>
    //         <h6>
    //           <b>Subject Details</b>
    //         </h6>
    //         <p>Subject: {appointment.Subject.subject_name}</p>
    //         <p>Specialty: {appointment.Subject.sub_subject_name}</p>
    //         <h6>
    //           <b>Appointment Details</b>
    //         </h6>
    //         <p>Start time: {appointment.start_time}</p>
    //         <p>End time: {appointment.end_time}</p>
    //       </div>
    //     );
    //   })}
    // </>
  );
}

export default TutorProfile;
