import Nav from './Nav'
import Footer from './Footer'
import '../App.css'


function Menu() {
  return(
    <Nav/>
  )
}

function baseLayout(props) {
  return (
    <div className="Title">
      <Menu/>
       {/* <h1>Website Title</h1> */}
            {props.children}
      <Footer />
    </div>
  );
}

export default baseLayout;