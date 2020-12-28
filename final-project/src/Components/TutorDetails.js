import { useState, useEffect } from 'react'
// import { NavLink } from 'react-router-dom'

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
                // props.onTutorsFetch(result)
                setTutor(result)
                setLoading(false)
            })
    }


    if(loading) {
        return(
            <p>Loading...</p>
        )
    }


    // const bookTutor = tutor => {
    //     return (
    //         <ul key = {tutor.tutor_id}>
    //             <li>{tutor.first_name}</li>
    //         </ul>
    //     )
    // }


    // create an if statemtent to check tutor is not null then run


    let subjectItems = tutor.Subjects.map(subject => {
        return <div key = {subject.subject_id}>Subject: {subject.subject_name}, Specialty: {subject.sub_subject_name}</div>
    })

    // async function subjectItemsFunc() {
    //     let subjectItems = await tutor.Subjects.map(subject => {
    //         return <div key = {subject.subject_id}>Subject: {subject.subject_name}, Specialty: {subject.sub_subject_name}</div>
    //     })
    //     console.log(subjectItems)
    // }

    // subjectItemsFunc()

    // let schedule = tutor.Schedule.map(time => {
    //     return <div>{time.monday}</div>
    // })

    

    return (


        <div>
            <p>Tutor Details</p>
            {/* {bookTutor} */}
            <ul>
                <li>{tutor.first_name} {tutor.last_name}</li>
                <li>{tutor.email}</li>
                {/* <li>{tutor.Subjects[0]}</li> */}
            </ul>
            {/* <button onClick = {subjectItemsFunc}>Subject</button> */}
            {subjectItems}
            <p>Monday: {tutor.Schedule.monday} </p>
            <p>Tuesday: {tutor.Schedule.tuesday} </p>
            <p>Wednesday: {tutor.Schedule.wednesday} </p>
            <p>Thursday: {tutor.Schedule.thursday} </p>
            <p>Friday: {tutor.Schedule.friday} </p>
            <p>Saturday: {tutor.Schedule.saturday} </p>
            <p>Sunday: {tutor.Schedule.sunday} </p>
            {/* {schedule} */}
            {/* {tutor.Schedule.monday} */}
            {/* <NavLink to = {'/tutor/' + props.match.params.tutorId + '/' + tutor.Schedule}><button>Schedule</button></NavLink> */}
            {/* <NavLink to='/tutorSchedule'><button>Schedule</button></NavLink> */}
        </div>
    )
}


export default TutorDetails