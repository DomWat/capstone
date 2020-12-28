import React, { useState } from "react";
import axios from "axios";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { purple } from "@material-ui/core/colors";
import { setAuthenticationHeader } from "../utils/authenticate";
import { connect } from "react-redux"
import '../styles/login.css'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: purple[300],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const [user, setUser] = useState({});

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const userLoggedIn = async () => {
    //making fetch call to server
    const response = await axios.post("http://localhost:3001/login/tutor", {
      email: user.email,
      password: user.password,
    });
    const result = response.data;
    console.log(result);
    return result;
  };

  const handleLogin = async () => {
    let userToken = await userLoggedIn();

    if (user) {
      const token = userToken.token;
      localStorage.setItem("jsonwebtoken", token);
      
      // after getting the token, we can set default authentication headers for axios to include jsonwebtoken 
      // Will send the token for every request user makes
      setAuthenticationHeader(token)
      // update the isAuthenticated in Redux to true 
      props.onAuthenticated()

    }
  };

  return (
    <Container component="main" maxWidth="xs" className='logInContainer'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className='signin'>
          Sign in as Tutor
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleOnChange}
            autoFocus
            className='signin'
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleOnChange}
            className='signin'
          />

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: purple[300], color: "white" }}
            className={classes.submit}
            onClick={handleLogin}
            className='signin'
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="#" variant="body2" className='signin'>
                {"Don't have an account? Sign Up"}
              </Link>
              <br></br>
              <Link href="/login/student" variant="body2" className='signin'>
                {"Sign in as a student"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

const mapDispatchToProps =(dispatch) => {
  return{
    onAuthenticated: () => dispatch({type: 'ON_AUTH'})
  }
}
export default connect(null, mapDispatchToProps)(SignIn)
// function Login() {
//     const [user, setUser] = useState({})

//     const handleOnChange = (e) => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value
//         })
//     }

//     const userLoggedIn = async () => {
//         //making fetch call to server
//         const response = await axios.post('http://localhost:3001/login/student', {
//             email: user.email,
//             password: user.password
//         })
//         const result = response.data
//         console.log(result)
//         return result
//     }

//     const handleLogin =  async () => {
//         let userToken = await userLoggedIn()

//         if (user) {
//             const token = userToken.token
//             localStorage.setItem('jsonwebtoken', token)
//         }
//     }

//     return (
//         <div>
//             <input type="text" name="email" placeholder="Enter email" onChange={handleOnChange}></input>
//             <input type="password" name="password" placeholder="Enter password" onChange={handleOnChange}></input>
//             <button onClick={handleLogin}>Login</button>

//         </div>
//     )
// }

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

//export default Login
