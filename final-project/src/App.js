// import { NavLink } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import './App.css'


function App () {
  return (
    <div className='homeContainer'>
      {/* <h1>Home Page</h1> */}
      {/* <button>
        <NavLink to="/registration-student">Register as Student</NavLink>
      </button> */}
      {/* <button>
        <NavLink to="/registration-tutor">Register as Tutor</NavLink>
      </button> */}

      <Button
        variant="contained"
        color="secondary"
        href="/registration-student"
        className='registerButton'
      >
        Register as Student
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="/registration-tutor"
        className='registerButton'

      >
        Register as Tutor
      </Button>
    </div>
  ); 
}

export default App