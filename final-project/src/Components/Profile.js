import { useEffect, useState} from "react"
import axios from 'axios'

function Profile () {
   
    const [student,setStudent] = useState({
        student:{}

    })
    useEffect(() => {
        fetchStudentProfile()
    },[])

    const fetchStudentProfile = async () =>  {
        let response = await axios.get('http://localhost:3001/student/me')
        const studentData = response.data
        console.log(studentData)

        setStudent({
            ...student,
            student: studentData
        })
    }
    console.log(student)
    console.log(student.student.first_name)

    
    

   
   
    return (
        <div>
            <h1><b>User Information</b></h1>
            <label><b>Name:</b></label>
            <p>{student.student.first_name}</p>
            <label><b>Last Name:</b></label>
            <p>{student.student.last_name}</p>
            <label><b>Email:</b></label>
            <p>{student.student.email}</p>
            <label><b>Student Photo:</b></label>
            <p>{student.student.image}</p>

        </div>
    )
}

export default Profile