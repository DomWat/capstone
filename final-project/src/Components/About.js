import Card from 'react-bootstrap/Card'
import '../styles/About.css'
function About () {
    return (
        <div className="Container">
            <h2> About GoodTutor</h2>
            <p className='aboutParagraph'>


            We are a revolutionary online education platform that provides tutoring for for those who need assistance at a free cost. Yes, at a free cost. Some of you may wonder why create a website that provides free assistance. Well, in 2020 many people were affected by the Pandemic in several ways.Many lost their jobs or even worse a family member. Due to this deadly virus,the world started transitioning to working remotely and learning remotely. Many students have found that online learning has not been a very pleasant experience. Until things go back to normal we are here to help students with resources and make online learning a great experience.</p>
           
           <div className='ourTeam'>Our Team</div>
            <div className="Card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/70596778?s=400&u=68e5bf656064672f01d0a31093eec3edbe138001&v=4" />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Dominic Waters</Card.Title>
                        <Card.Text className="card-text">
                            Full Stack Developer
                        </Card.Text>
                        <div className="button">
                        <Card.Link href="https://github.com/DomWat">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/domwat/">LinkedIn</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card2">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/64177857?s=400&u=46d38da17a40efb2e833d1dbe697ff76a005a656&v=4" />
                    <Card.Body>
                        <Card.Title>Cristina Hernandez</Card.Title>
                        <Card.Text>
                            Full Stack Developer
                        </Card.Text>
                        <div className="button">
                        <Card.Link href="https://github.com/cristinahdz29">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/ana-cristina-hernandez/">LinkedIn</Card.Link>
                        </div>
                    </Card.Body>
                </Card>
                </div>
                <div className="Card3">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars1.githubusercontent.com/u/64038559?s=400&u=57edb188854f5e294c19dc7a656f6c4bbf814807&v=4" />
                    <Card.Body>
                        <Card.Title>William Foody</Card.Title>
                        <Card.Text>
                            Full Stack Developer
                        <div className="button">
                        <Card.Link href="https://github.com/wfoody">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/wfoody/">LinkedIn</Card.Link>
                        </div>    
                        </Card.Text>   
                    </Card.Body>
                </Card>
                </div>
                <div className="Card4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/70726489?s=400&u=9cdf7cef673b24c480600850c94243b88bbded7b&v=4" />
                    <Card.Body>
                        <Card.Title>Juan Trinidad</Card.Title>
                        <Card.Text>
                            Full Stack Developer
                        </Card.Text>
                        <div className="button">
                        <Card.Link href="https://github.com/juantrinidad14">GitHub</Card.Link>
                        <Card.Link href="www.linkedin.com/in/juan-trinidad/">LinkedIn</Card.Link>
                        </div>  
                    </Card.Body>
                </Card>
                </div>
                <div className="Card5">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/72713592?s=400&u=a8eb7398a09aeeb54493d9d5bd09792dcdfe075c&v=4" />
                    <Card.Body>
                        <Card.Title>Debo Oduwole</Card.Title>
                        <Card.Text>
                            Full Stack Developer
                        </Card.Text>
                           <div className="button">
                        <Card.Link href="https://github.com/AOLink">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/adebowale-oduwole-30652a121/">LinkedIn</Card.Link>
                        </div>  
                    </Card.Body>
                </Card>
                </div>
        </div>
    )
}

export default About