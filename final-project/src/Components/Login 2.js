import React, { useState  } from 'react'
import LoginForm from './Components/LoginForm'


function Login() {
    const adminUser ={
      email: "admin@admin.com",
      password: "admin123"
    }
  
    const [user, setUser] = useState({name: "", email: ""})
    const [error, setError]= useState("")
  
    const Login = details => {
      console.log(details)
  
      if (details.email == adminUser.email && details.password == adminUser.password){
        console.log("Loggen In")
        setUser({
          name: details.name,
          lastName: details.lastName,
          email: details.email
        })
      } else {
        console.log("Details do not Match")
        setError("Details do not match ")
      }
    }
    const Logout = () => {
      console.log("Logout")
      setUser({ name:"", email: ""})
     
        // render() {
            return (
                <div>
                    <div>
                        {(user.email != "") ? (
                            <div className="welcome">
                                <h2>Welcome, <span>{user.name}</span></h2>
                                <button onClick={Logout}>Logout</button>
                            </div>
                        ) : (
                                <LoginForm Login={Login} error={error} />
                            )}
    
                    </div>
                </div>
            )
        }
    }
    



export default Login