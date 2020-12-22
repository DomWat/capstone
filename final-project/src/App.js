import { NavLink } from 'react-router-dom'


function App () {
  return(
    <div>
      <h1>Home Page</h1>
        <button><NavLink to = '/registration-student'>Register as Student</NavLink></button>
        <button><NavLink to = '/registration-tutor'>Register as Tutor</NavLink></button>
    </div>
  ) 
}

export default App