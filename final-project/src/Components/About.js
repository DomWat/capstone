import Card from 'react-bootstrap/Card'
import '../styles/About.css'
function About () {
    return (
        <div className="Container">
            <h2> About Us</h2>
            <p>We are a revolutionary online education platform that provides tutoring for for those who need assistance at a free cost. Yes, at a free cost. Some of you may wonder why created a website the provide free assistances. Well, in 2020 many of were affected by the Pandemic in several ways such loosing your job or a family member. Although, we don't have a cure for this deadly virus but,  the world started transitioning to remotely learning and working for out safety.The transition to online learning hasn’t been a pleasant experience since many students are still trying to adapt and many have trouble understanding the material.However, until things come back to normal, we want to assist all those students who do not have the resources to pay for a private tutor and make this online learning become a great experience. </p>

            <div className="Card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/70596778?s=400&u=68e5bf656064672f01d0a31093eec3edbe138001&v=4" />
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">Dominic Water</Card.Title>
                        <Card.Text className="card-text">
                            FullStack Developer
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
                            FullStack Developer
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
                            FullStack Developer
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
                            FullStack Developer
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
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Adebowale Oduwole</Card.Title>
                        <Card.Text>
                            FullStack Developer
                        </Card.Text>
                           <div className="button">
                        <Card.Link href="">GitHub</Card.Link>
                        <Card.Link href="https://www.linkedin.com/in/adebowale-oduwole-30652a121/">LinkedIn</Card.Link>
                        </div>  
                    </Card.Body>
                </Card>
                </div>
        </div>
    )
}

export default About