import React from 'react'
import classes from '../styles/Footer.module.css'

function Footer() {
    return(
        <div className={classes.Footer}>
            <span className='blueGood'>good</span><span className='purpleTutor'>tutor&nbsp;</span>
            <span>© 2020</span>
        </div>
    )
}

export default Footer