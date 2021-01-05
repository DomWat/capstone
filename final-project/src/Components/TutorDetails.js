import { useState, useEffect } from "react";
// import { NavLink } from 'react-router-dom'
import "../styles/TutorDetails.css";
import DateAndTimePickers from "../Components/DatePickerTest";
import React from "react";



function TutorDetails(props) {


    const [tutor, setTutor] = useState({
        Schedule: {},
        Subjects: [],
    });

    const [loading, setLoading] = useState(true);

    // state for passing subject_id and tutor_id to dateComponent as props
    //const [dateParams, setDateParams] = useState({});

    useEffect(() => {
        let tutorId = props.match.params.tutorId;
        fetchTutorById(tutorId);
    }, []);

    const fetchTutorById = (tutorId) => {
        fetch(`http://localhost:3001/tutor/${tutorId}`)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setTutor(result);
                setLoading(false);
            });
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    //   const handleClick = (subjectId) => () => {
    //     let tutor_id = props.match.params.tutorId;
    //     setDateParams({
    //       subject_id: subjectId,
    //       tutor_id: tutor_id,
    //     });
    //   };

    //   let subjectItems = tutor.Subjects.map((subject) => {
    //     return (
    //       <div key={subject.subject_id}>
    //         Subjects taught: {subject.subject_name} ({subject.sub_subject_name}){" "}
    //         <button onClick={handleClick(subject.subject_id)}>
    //           Select Subject
    //         </button>
    //       </div>
    //     );
    //   });

    // Testing:
    //console.log(dateParams.subject_id, dateParams.tutor_id, "DateParams")

    return (
        <div className="detailsDateContainer">
            <h2 className='tutorDetailsTitle'>
                {tutor.first_name} {tutor.last_name}
            </h2>
            <div className='detailsRow'>
            <div className="detailsContainer">

                <ul>
                    <li>Contact: {tutor.email}</li>
                </ul>
                {/* <br />
                <br /> */}
                <p className="weekday">Monday<br></br> {tutor.Schedule.monday} </p>
                <p className="weekday">Tuesday<br></br> {tutor.Schedule.tuesday} </p>
                <p className="weekday">Wednesday<br></br> {tutor.Schedule.wednesday} </p>
                <p className="weekday">Thursday<br></br> {tutor.Schedule.thursday} </p>
                <p className="weekday">Friday<br></br> {tutor.Schedule.friday} </p>
                <p className="weekday">Saturday<br></br> {tutor.Schedule.saturday} </p>
                <p className="weekday">Sunday<br></br> {tutor.Schedule.sunday} </p>
            </div>
            <div className="datePicker">
                <DateAndTimePickers

                    tutorId={props.match.params.tutorId}
                    subjectList={tutor.Subjects}
                    history={props.history}
                />
            </div>
            </div>
        </div>
    );
}

export default TutorDetails;
