import React from "react";
import useStudentForm from "./useStudentForm";
import Validate from "./ValidateRegInfo";
// import classes from "../styles/Form.module.css";
// import { NavLink } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import '../styles/Register.css'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegistrationStudent(props) {
  const classes = useStyles();
  const { handleChange, values, handleSubmit, errors } = useStudentForm(
    Validate,
    props.history
  );

  return (
    <Container component="main" maxWidth="xs" className='registerContainer'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} className='registerIcon'>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className='register'
>
          Sign up as Student
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                id="first_name"
                label="First Name"
                autoFocus
                onChange={handleChange}
                value={values.first_name}
                error={errors.first_name}
                helperText={errors.first_name ? errors.first_name : ""}
                className='register'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={handleChange}
                value={values.last_name}
                error={errors.last_name}
                helperText={errors.last_name ? errors.last_name : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                value={values.email}
                error={errors.email}
                helperText={errors.email ? errors.email : ""}
                className='register'

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={values.password}
                error={errors.password}
                helperText={errors.password ? errors.password : ""}
                className='register'

              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
            className='registerButton'

          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login/student" variant="body2" className='registerLink'
>
                Already have a student account? Sign in
              </Link><br></br>
              <Link href="/registration-tutor" variant="body2" className='registerLink'>
                {"Sign up as Tutor"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

//function RegistrationStudent() {
//     const {handleChange, values, handleSubmit, errors} = useStudentForm(Validate)

//     return (
//         <div>
//             <form onSubmit = {handleSubmit}>
//                 <h1>Register as a Student</h1>
//                 <div className={classes.errors}>
//                     <label
//                         htmlFor='email'>
//                         Email
//                     </label>
//                     <input
//                         id = 'email'
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email'
//                         value = {values.email}
//                         onChange = {handleChange} />
//                     {errors.email && <p>{errors.email}</p>}
//                 </div>
//                 <div className={classes.errors}>
//                     <label
//                         htmlFor='password'>
//                         Password
//                     </label>
//                     <input
//                         id = 'password'
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password'
//                         value = {values.password}
//                         onChange = {handleChange} />
//                     {errors.password && <p>{errors.password}</p>}
//                 </div>
//                 {/* <div className={classes.errors}>
//                     <label
//                         htmlFor='password2'>
//                         Confirm Password
//                     </label>
//                     <input
//                         id = 'password2'
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password2'
//                         value = {values.password2}
//                         onChange = {handleChange} />
//                     {errors.password2 && <p>{errors.password2}</p>}
//                 </div> */}
//                 <div className={classes.errors}>
//                     <label
//                         htmlFor='first_name'>
//                         First Name
//                     </label>
//                     <input
//                         id = 'first_name'
//                         type='text'
//                         name='first_name'
//                         placeholder='Enter your first name'
//                         value = {values.first_name}
//                         onChange = {handleChange} />
//                     {errors.first_name && <p>{errors.first_name}</p>}
//                 </div>
//                 <div className={classes.errors}>
//                     <label
//                         htmlFor='last_name'>
//                         Last Name
//                     </label>
//                     <input
//                         id = 'last_name'
//                         type='text'
//                         name='last_name'
//                         placeholder='Enter your last name'
//                         value = {values.last_name}
//                         onChange = {handleChange} />
//                     {errors.last_name && <p>{errors.last_name}</p>}
//                 </div>
//                 <button
//                     type = 'submit'>Register</button>
//                 <span>Already have an account? please login <NavLink to = '/login/student'>here.</NavLink></span>
//             </form>
//         </div>
//     )
//}

//export default RegistrationStudent
