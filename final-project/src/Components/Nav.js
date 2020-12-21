import React from 'react'
import classes from '../styles/Nav.module.css'
import { NavLink } from 'react-router-dom'

function nav() {
    return(
        <div className={classes.Nav}>
            <NavLink 
                exact to = '/' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>Home</NavLink>
            <NavLink 
                to = '/classes' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>Find Classes</NavLink>
            <NavLink 
                to = '/profile' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>Profile</NavLink>
            <NavLink 
                to = '/login' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>Login</NavLink>
            <NavLink 
                exact to = '/' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>Logout</NavLink>
            <NavLink 
                to = '/about' 
                activeClassName = {classes.Active}
                className = {classes.NavLink}>About</NavLink>
        </div>
    )
}

export default nav