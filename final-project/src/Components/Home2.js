import '../styles/Home2.css'
import image from './book.png'


function Home2() {

    return (
        <div className='home2Container'>
            <p className='home2textTop'>Our tutors are volunteers who generously donate their time to provide academic assistance to whomever may need it. Whether you're in need of some extra help, or you're in a position to give some extra help, sign up to join the GoodTutor community today! Just follow these simple steps:</p><br></br><br></br>
            <div className='picAndText'>
                <img src={image} className='home2pic' />

                <div className='rightSideText'>

                    <div className='lists'>
                        <ul>
                            <p><i>STUDENTS</i></p>

                            <div className='homeListItem'><span className='numbersSpanStudent'>1</span><li>Register</li></div>

                            <div className='homeListItem'><span className='numbersSpanStudent'>2</span><li>Choose a tutor from our 'Find Tutors' tab</li></div>

                            <div className='homeListItem'><span className='numbersSpanStudent'>3</span><li>Select a date  time from the tutor's availability</li></div>

                            <div className='homeListItem'><span className='numbersSpanStudent'>4</span><li>Meet virtually with your tutor!</li></div>

                            <br></br>
                        </ul>
                        <ul>
                            <p><i>TUTORS</i></p>
                            <div className='homeListItem'><span className='numbersSpanTutor'>1</span><li>Register</li></div>

                            <div className='homeListItem'><span className='numbersSpanTutor'>2</span><li>Tell us your availability and what subjects you teach</li></div>

                            <div className='homeListItem'><span className='numbersSpanTutor'>3</span><li>Wait for a student to find you!</li></div>

                            <div className='homeListItem'><span className='numbersSpanTutor'>4</span><li>Meet virtually with your student!</li></div>

                            <br></br>
                        </ul>
                    </div>
                    <div className='bottomText'>
                        After you select a time to meet, you'll receive an automatic email response from us to let we know we have you booked! Your tutor will email you with the link you'll use to meet for your lesson. Register below to start learning!
                    </div>
                </div>
               
            </div>
            <div className='bottomTextAlt'>
                        After you select a time to meet, you'll receive an automatic email response from us to let we know we have you booked! Your tutor will email you with the link you'll use to meet for your lesson. Register below to start learning!
                    </div>
        </div>)
}

export default Home2