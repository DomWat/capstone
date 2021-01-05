import React from "react"
//import NavegationBar from 'react-bootstrap/Navbar'
//import Nav from 'react-bootstrap/Nav'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
//import Switch from '@material-ui/core/Switch';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import image from './goodtutorlogo.jpg';
import '../styles/Nav.css'
import Popover from '@material-ui/core/Popover';


// import shadows from "@material-ui/core/styles/shadows";
//import { Grid } from '@material-ui/core'
//import { checkPropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));



 function Navbar (props) {
 const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("jsonwebtoken")
    props.onLogout()
  
  }

  console.log(props.userType)



  return (
    <div className={classes.root} className='navBar'>
     
      <AppBar position="static" style={{ boxShadow: 'none', border: 'none'}}>
        <Toolbar className='navBar'>
           {/* <IconButton 
            edge="start" 
            className={classes.menuButton} 
            aria-label="menu" 
      

            >
            <MenuIcon className='navMenuIcon'/>
          </IconButton> */}
 
         
          <Typography className={classes.root}>
  {/* <NavLink to="/" > */}
    {/* Home */}
  {/* </NavLink> */}
  {/* < NavLink to="/classes"  color="inherit"> */}
   {/* Find Classes */}
  {/* </NavLink> */}
  {/* {props.isAuth ? <NavLink to="/profile"  variant="body2">Profile</NavLink> :null} */}
  {/* {!props.isAuth ? <NavLink to="/login"  variant="body2" >Login</NavLink> :null} */}
 {/* {props.isAuth ? <NavLink to="/"  variant="body2">Logout</NavLink> :null} */}
  {/* <NavLink to="/about"  variant="body2"> */}
    {/* About */}
  {/* </NavLink> */}
</Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                className='topRightMenu'

              >
                {/* <AccountCircle className='topRightMenu'/> */}
                <MenuIcon className='navMenuIcon'/>

              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                className='topRightMenu'
              >
                <MenuItem onClick={handleClose} ><NavLink to="/" className='menuItem'>Home</NavLink></MenuItem>

                <MenuItem onClick={handleClose} >< NavLink to="/classes"  color="inherit" className='menuItem'>
                  Find Tutors
                </NavLink></MenuItem>

                {!props.isAuth ? <MenuItem  color="inherit" className='hrLine'>
                 <hr></hr>
                </MenuItem> :null}

                {props.isAuth ? <MenuItem  color="inherit" className='hrLine'>
                 <hr></hr>
                </MenuItem> :null}

                {props.isAuth ? <MenuItem onClick={handleClose} ><NavLink className='menuItem' to={props.userType}  variant="body2" > 
                  Profile
                </NavLink></MenuItem> :null}

                {!props.isAuth ? <MenuItem  onClick={handleClose} ><NavLink className='menuItem' to="/login/student"  variant="body2" >
                  Login
                </NavLink></MenuItem> :null}

                {props.isAuth ? <MenuItem><NavLink className='menuItem' to="/" onClick={() => {handleLogout(); handleClose()}} variant="body2" >
                  Logout
                </NavLink></MenuItem> :null}
                
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <NavLink to='/'><img src={image} alt='logo' className='titleLogo'/></NavLink>
      <Typography className={classes.root} className='linksDiv'>
  <NavLink to="/" className='navLink'>
    Home
  </NavLink>
  {props.findTutorDisplay ? < NavLink to="/classes"  color="inherit" className='navLink'>
   Find Tutors
  </NavLink> :null}
  {props.isAuth ? <NavLink to={props.userType}  variant="body2" className='navLink'> 
    Profile
  </NavLink> :null}
  <NavLink to="/about"  variant="body2" className='navLink'>
    About
  </NavLink>
  {!props.isAuth ? <NavLink to="/login/student"  variant="body2" className='navLink'>
    Login
  </NavLink> :null}
 {props.isAuth ? <NavLink  to="/" onClick={handleLogout} variant="body2" className='navLink'>
    Logout
  </NavLink> :null}
</Typography>

    </div>
  );
}


const mapStateToProps = (state) => {
  return{
    isAuth: state.isAuthenticated,
    userType: state.userType,
    findTutorDisplay: state.findTutorDisplay
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onLogout:() => dispatch({type:'ON_LOGOUT'})
    }
  }
  



export default connect(mapStateToProps,mapDispatchToProps)(Navbar)




        /*
        <div className="navBar">
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Website</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/classes">Find Classes</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>

        </Nav>
      </Navbar>
      </div>

        /*<div className={classes.Nav}>
           
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
        </div>*/


