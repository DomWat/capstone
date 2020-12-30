import React, { Component } from 'react'

export default class StudentProfile extends Component {


    constructor() {
        super()
        

        this.state = {

        }

    }

    fetchStudentProfile = () => {
        fetch('localhost:3001/student/me')
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
    }

    componentDidMount() {
        this.fetchStudentProfile()
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}
