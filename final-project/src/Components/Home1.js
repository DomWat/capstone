import '../styles/Home1.css'
import image from './computerbrain.png'

function Home1() {

    return (
    <div className='home1Container'>
        
        <p className='home1text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <img alt='home1pic' src={image} className='home1pic' />
    
    </div>)
}

export default Home1