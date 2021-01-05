export default function validateRegInfo (values) {
    let errors = {}

    if(!values.email.trim()) {
        errors.email = "Email is required"
    }
    // } else if (!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\,[A-Z]{2,}$/i.test(values.email)) {
    //     errors.email = "Email address is invalid"
    // }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more'
    }

    // if(!values.password2) {
    //     errors.password2 = 'Password is required'
    // } else if (values.password2 !== values.password) {
    //     errors.password2 = 'Passwords do not match!'
    // }

    if(!values.first_name) {
        errors.first_name = 'First Name is required'
    } 

    if(!values.last_name) {
        errors.last_name = 'Last Name is required'
    } 

    // if(!values.hourly_rate) {
    //     errors.hourly_rate = 'Hourly Rate is required'
    // } 

    // if(!values.description) {
    //     errors.description = 'Please enter a Bio'
    // } 

    return errors
}