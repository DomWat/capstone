import React from 'react'
import useStudentForm from './useStudentForm'
import Validate from './ValidateRegInfo'
import classes from '../styles/Form.module.css'
import { NavLink } from 'react-router-dom'



function RegistrationStudent() {
    const {handleChange, values, handleSubmit, errors} = useStudentForm(Validate)

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <h1>Register as a Student</h1>
                <div className={classes.errors}>
                    <label
                        htmlFor='email'>
                        Email
                    </label>
                    <input
                        id = 'email'
                        type='email'
                        name='email'
                        placeholder='Enter your email' 
                        value = {values.email}
                        onChange = {handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className={classes.errors}>
                    <label
                        htmlFor='password'>
                        Password
                    </label>
                    <input
                        id = 'password'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value = {values.password}
                        onChange = {handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                {/* <div className={classes.errors}>
                    <label
                        htmlFor='password2'>
                        Confirm Password
                    </label>
                    <input
                        id = 'password2'
                        type='password'
                        name='password'
                        placeholder='Enter your password2'
                        value = {values.password2}
                        onChange = {handleChange} />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div> */}
                <div className={classes.errors}>
                    <label
                        htmlFor='first_name'>
                        First Name
                    </label>
                    <input
                        id = 'first_name'
                        type='text'
                        name='first_name'
                        placeholder='Enter your first name'
                        value = {values.first_name}
                        onChange = {handleChange} />
                    {errors.first_name && <p>{errors.first_name}</p>}
                </div>
                <div className={classes.errors}>
                    <label
                        htmlFor='last_name'>
                        Last Name
                    </label>
                    <input
                        id = 'last_name'
                        type='text'
                        name='last_name'
                        placeholder='Enter your last name'
                        value = {values.last_name}
                        onChange = {handleChange} />
                    {errors.last_name && <p>{errors.last_name}</p>}
                </div>
                <button  
                    type = 'submit'>Register</button>
                <span>Already have an account? please login <NavLink to = '/login'>here.</NavLink></span>
            </form>
        </div>
    )
}

export default RegistrationStudent