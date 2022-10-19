import { Boxes, BoxesItems, Button, Buttons, Container, Heading } from "./ProjectStyle";
import project1 from './Bath&bodyworks.jpg'
import project2 from "./unplashimg.jpg"
export default function Projects(){
    return <>
    <Container>
        <Heading>Projects</Heading>
        <Boxes>
            <BoxesItems>
                <h3 style={{color:"white"}}>BathandBodyWorks</h3>
                <img src={project1} width="90%" style={{borderRadius:'20px'}} alt="" />
                <Button>
                <Buttons>Live</Buttons>
                <Buttons>GitHub</Buttons>
                </Button>
            </BoxesItems>
            <BoxesItems>
                <h3 style={{color:"white"}}>Unplash</h3>
                <img src={project2} width="90%" style={{borderRadius:'20px'}} alt="" />
                <Button>
                <Buttons>Live</Buttons>
                <Buttons>GitHub</Buttons>
                </Button>
            </BoxesItems>
        </Boxes>
    </Container>
        </>
}