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
//import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: purple[500],
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginStudent(props) {
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
      const response = await axios.post("http://localhost:3001/login/student", {
        email: user.email,
        password: user.password,
      });
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
      //update the isAuthenticated in Redux to true
      if (token) {
        props.onAuthenticated();
        props.onStudentLogin();
        props.history.push("/profile");
      } else {
        // alert("Please use correct username and password!")
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  function handleKeyPress(e){
    if (e.keyCode === 13){
       handleLogin();
    }
  }

  return (
    <Container component="main" maxWidth="xs" className="logInContainer">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} className="signinIcon">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className="signin">
          Sign in as Student
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
            error={error}
            helperText={error ? "Incorrect password" : ""}
            onKeyDown={handleKeyPress}
          />

          <Button
            // type="submit"
            fullWidth
            variant="contained"
            style={{ color: "white" }}
            className={classes.submit}
            onClick={handleLogin}
            className="signinButton"
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                href="/registration-student"
                variant="body2"
                className="signinLink"
              >
                {"Don't have an account? Sign Up"}
              </Link>
              <br></br>
              <Link href="/login" variant="body2" className="signinLink">
                {"Sign in as Tutor"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAuthenticated: () => dispatch({ type: "ON_AUTH" }),
    onStudentLogin: () =>
      dispatch({
        type: "STUDENT_LOGIN",
      }),
  };
};
export default connect(null, mapDispatchToProps)(LoginStudent);
