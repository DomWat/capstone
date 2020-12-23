import { useState, useEffect } from 'react'
// import { connect } from 'react-redux'
// import axios from 'axios'


function Classes() {

    const [tutors, setTutors] = useState([])

    useEffect(() => {
        fetchTutors()
    }, [])


    const fetchTutors = () => {
        fetch('http://localhost:3001/all-tutors')
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setTutors(result)
            })
    }

    const tutorInfo = tutors.map(tutor => {

        let subjectItems = tutor.Subjects.map(subject => {
            return <div key = {subject.subject_id}>{subject.subject_name}, {subject.sub_subject_name}</div>
        })    

        return (
            <div key = {tutor.tutor_id}>
                <li>
                    {tutor.first_name},
                    {tutor.last_name},
                    {tutor.email},
                    {tutor.image},
                    {/* {tutor.description}, */}
                    {subjectItems}
                    </li>
                <button>BOOK!</button>
            </div>
        )
    })

    return (
        <div>
            <h2>Classes!!</h2>
            <h3>Tutors</h3>
            {tutorInfo}
        </div>
    )
}

export default Classes