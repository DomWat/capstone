// import { NavLink } from 'react-router-dom'
import Button from "@material-ui/core/Button";
import './App.css'
import Home1 from "./Components/Home1";
import Home2 from "./Components/Home2";


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
      <Home1 />
      <Home2 />
      <div className='appContainer'>
        <div className='getStarted'>
          Ready to get started?
        </div>
        <div className='buttonContainer'>
      <Button
        variant="contained"
        color="secondary"
        href="/registration-student"
        className='homeRegisterButton'
      >
        Register as Student
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="/registration-tutor"
        className='homeRegisterButton'

      >
        Register as Tutor
      </Button>
      </div>
      </div>
    </div>
  ); 
}

export default App