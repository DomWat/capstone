import { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
import '../styles/TutorDetails.css'

function TutorDetails(props) {


    const [tutor, setTutor] = useState({
        Schedule: {},
        Subjects: []
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let tutorId = props.match.params.tutorId
        fetchTutorById(tutorId)
    }, [])


    const fetchTutorById = (tutorId) => {
        fetch(`http://localhost:3001/tutor/${tutorId}`)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTutor(result)
                setLoading(false)
            })
    }


    if(loading) {
        return(
            <p>Loading...</p>
        )
    }


    


    let subjectItems = tutor.Subjects.map(subject => {
        return <div key = {subject.subject_id}>Subjects taught: {subject.subject_name}<br /> Specialty: {subject.sub_subject_name}</div>
    })

    

    

    return (


        <div className='detailsContainer'>
            <h2>{tutor.first_name} {tutor.last_name}</h2>
            <ul>
            
                <li>Contact: {tutor.email}</li>
            </ul>
            {subjectItems}<br /><br />
            <p>Monday: {tutor.Schedule.monday} </p>
            <p>Tuesday: {tutor.Schedule.tuesday} </p>
            <p>Wednesday: {tutor.Schedule.wednesday} </p>
            <p>Thursday: {tutor.Schedule.thursday} </p>
            <p>Friday: {tutor.Schedule.friday} </p>
            <p>Saturday: {tutor.Schedule.saturday} </p>
            <p>Sunday: {tutor.Schedule.sunday} </p>
        </div>
    )
}


export default TutorDetails