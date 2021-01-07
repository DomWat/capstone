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
import { connect } from "react-redux";
import "../styles/Login.css";

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

  const [error, setError] = useState(false);

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const userLoggedIn = async () => {
    //making fetch call to server
    try {
      const response = await axios.post(
        "https://tranquil-everglades-92280.herokuapp.com/login/tutor",
        {
          email: user.email,
          password: user.password,
        }
      );
      const result = response.data;
      console.log(result);
      return result;
    } catch (err) {
      return null;
    }
  };

  const handleLogin = async () => {
    let userToken = await userLoggedIn();

    if (userToken) {
      const token = userToken.token;
      localStorage.setItem("jsonwebtoken", token);

      // after getting the token, we can set default authentication headers for axios to include jsonwebtoken
      // Will send the token for every request user makes
      setAuthenticationHeader(token);
      // update the isAuthenticated in Redux to true

      if (token) {
        props.onAuthenticated();
        props.onTutorLogin();
        props.history.push("/tutor-profile");
      } else {
        // alert('Please use correct username and password!')
        setError(true);
      }
    } else {
      // alert('Please use correct username and password!')
      setError(true);
    }
  };

  // handleGuestLoggedIn
  const handleGuestLogin = async () => {
    let userToken = await guestLoggedIn();

    if (userToken) {
      const token = userToken.token;
      localStorage.setItem("jsonwebtoken", token);

      // after getting the token, we can set default authentication headers for axios to include jsonwebtoken
      // Will send the token for every request user makes
      setAuthenticationHeader(token);
      //update the isAuthenticated in Redux to true
      if (token) {
        props.onAuthenticated();
        props.onTutorLogin();
        props.history.push("/tutor-profile");
      } else {
        // alert("Please use correct username and password!")
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  function handleKeyPress(e) {
    if (e.keyCode === 13) {
      handleLogin();
    }
  }

  //Guest Login function
  const guestLoggedIn = async () => {
    try {
      const response = await axios.post(
        "https://tranquil-everglades-92280.herokuapp.com/login/tutor",
        {
          email: ".tutor@guest.com",
          password: "pass123",
        }
      );
      const result = response.data;
      console.log(result);
      return result;
    } catch (err) {
      return null;
    }
  };

  return (
    <Container component="main" maxWidth="xs" className="logInContainer">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} className="signinIcon">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="signin">
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
            className="signin"
            error={error}
            helperText={error ? "Incorrect username" : ""}
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
            className="signin"
            error={error}
            helperText={error ? "Incorrect password" : ""}
            onKeyDown={handleKeyPress}
          />

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: purple[300], color: "white" }}
            className={classes.submit}
            onClick={handleLogin}
            className="signinButton"
          >
            Sign In
          </Button>
          <Button
            // type="submit"
            fullWidth
            variant="contained"
            style={{ backgroundColor: purple[300], color: "white" }}
            className={classes.submit}
            onClick={handleGuestLogin}
            className="signinButton"
          >
            Sign In As Guest
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href="/registration-tutor"
                variant="body2"
                className="signinLink"
              >
                {"Don't have a tutor account? Sign Up"}
              </Link>
              <br></br>
              <Link
                href="/login/student"
                variant="body2"
                className="signinLink"
              >
                {"Sign in as Student"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    // isAuth: state.isAuthenticated,
    userType: state.userType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch({ type: "ON_AUTH" }),
    onTutorLogin: () => dispatch({ type: "TUTOR_LOGIN" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
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
//         const response = await axios.post('https://tranquil-everglades-92280.herokuapp.com/login/student', {
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
