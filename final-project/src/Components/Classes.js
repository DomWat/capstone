import { useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import axios from 'axios'


function Classes(props) {

    // const [tutors, setTutors] = useState([])

    useEffect(() => {
        fetchTutors()
    }, [])


    const fetchTutors = () => {
        fetch('http://localhost:3001/all-tutors')
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                // setTutors(result)
                props.onTutorsFetch(result)
            })
    }

    const tutorInfo = props.tutors.map(tutor => {

        let subjectItems = tutor.Subjects.map(subject => {
            return <div key = {subject.subject_id}>Subject: {subject.subject_name} ({subject.sub_subject_name})</div>
        })    

        return (
            <div key = {tutor.tutor_id}>
                <li>
                    Name: {tutor.first_name} {tutor.last_name},
                    Email: {tutor.email},
                    Image: {tutor.image},
                    {/* {tutor.description}, */}
                    {subjectItems}
                    </li>
                <NavLink to =  {'/tutor/' + tutor.tutor_id}><button>BOOK!</button></NavLink>
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

const mapStateToProps = (state) => {
    return {
        tutors: state.tutors
        // tutor_num: state.tutor_id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTutorsFetch: (tutors) => dispatch({type: 'FETCH_TUTORS', payload: tutors}),
        // onTutorId: (tutor_id) => dispatch({type: 'FETCH_TUTORID', payload: tutor_id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Classes)