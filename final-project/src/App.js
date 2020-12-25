import { NavLink } from 'react-router-dom'
import Button from "@material-ui/core/Button";


function App () {
  return (
    <div>
      <h1>Home Page</h1>
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
      >
        Register as Student
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="/registration-tutor"
      >
        Register as Tutor
      </Button>
    </div>
  ); 
}

export default App