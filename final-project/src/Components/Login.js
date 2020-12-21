import React, { useState  } from 'react'
import axios from 'axios'
function Login() {
    const [user, setUser] = useState({})

    const handleOnChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const userLoggedIn = async () => {
        //making fetch call to server
        const response = await axios.post('http://localhost:3001/login/student', {
            email: user.email,
            password: user.password
        })
        const result = response.data
        return result
    }

    const handleLogin =  async () => {
        let userToken = await userLoggedIn()

        if (user) {
            const token = userToken.token
            localStorage.setItem('jsonwebtoken', token)
        }
    }

    return (
        <div>
            <input type="email" name="email" placeholder="Enter email" onChange={handleOnChange}></input>
            <input type="password" name="password" placeholder="Enter password" onChange={handleOnChange}></input>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    )
}





// function Login() {
//     const adminUser ={
//       email: "admin@admin.com",
//       password: "admin123"
//     }
  
//     const [user, setUser] = useState({name: "", email: ""})
//     const [error, setError]= useState("")
  
//     const Login = details => {
//       console.log(details)
  
//       if (details.email == adminUser.email && details.password == adminUser.password){
//         console.log("Loggen In")
//         setUser({
//           name: details.name,
//           lastName: details.lastName,
//           email: details.email
//         })
//       } else {
//         console.log("Details do not Match")
//         setError("Details do not match ")
//       }
//     }
//     const Logout = () => {
//       console.log("Logout")
//       setUser({ name:"", email: ""})

//       const [details, setDetails] = useState({name: "",lastName: "", email: "", password: ""})

//       const submitHandler = e => {
//           e.preventDefault()
  
//           Login(details)
//       }


//       <form onSubmit={submitHandler}>
//            <div className= "form-inner">
//             {(error != "") ? (<div className="error">{error}</div> ) : ""}
//             {/* <div className="form-group">
//                 <label htmlfor="name">Name</label>
//                 <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
//             </div> */}
//             <div className="form-group">
//                 <label htmlFor="email">Email: </label>
//                 <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
//             </div>
//             <div className="form-group">
//                 <label htmlFor="password">Passowrd:</label>
//                 <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
//             </div>
//             <input type="submit" value= "LOGIN" />
//             <input type="submit" value= "REGISTRATION" />

//            </div>
//        </form>
     
//         // render() {
//             return (
//                 <div>
//                     <div>
//                         {(user.email != "") ? (
//                             <div className="welcome">
//                                 <h2>Welcome, <span>{user.name}</span></h2>
//                                 <button onClick={Logout}>Logout</button>
//                             </div>
//                         ) : (
//                                 <LoginForm Login={Login} error={error} />
//                             )}
    
//                     </div>
//                 </div>
//             )
//         }
//     }
    



export default Login