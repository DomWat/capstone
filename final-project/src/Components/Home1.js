import '../styles/Home1.css'
import image from './computerbrain.png'

function Home1() {

    return (
    <div className='home1Container'>
        
        <p className='home1text'>GoodTutor is an accessible, online-learning platform designed to provide free tutoring services to students of all ages. With personalized, one-on-one lessons, GoodTutor offers the direct engagement that many students need in order to learn and succeed - at no cost.  </p>
        <img src={image} className='home1pic' />
    
    </div>)
}

export default Home1