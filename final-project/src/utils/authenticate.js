import axios from 'axios'

// function will use axios framework and set default headers for authorization to
// be Bearer and token
// no longer need to send in the jsonwebtoken as headers everytime student/tutor
// make a request to the server
// can verify jsonwebtoken was sent to server by checking network tab and checking 
// if there is a section called 'Authortization Headers' and it has Bearer and
// token
export function setAuthenticationHeader(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}