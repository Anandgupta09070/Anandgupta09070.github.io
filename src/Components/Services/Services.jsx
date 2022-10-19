import { Boxes, Container, Heading } from "../Projects/ProjectStyle"
import { Box, Image } from "./ServicesStyle"

export default function Services() {
    const arr = [1, 1, 1, 1, 1, 1];
    console.log(arr)
    return <>
        <Container style={{ background: 'transparent',height:"auto" }}>
            <Heading>
                Skills
            </Heading>
            <Boxes style={{ gap: '50px', flexWrap: 'wrap', paddingInline: '100px',paddingBottom:'100px' ,height:'auto'}}>

                <Box background='#212121;'>
                    <Image style={{width:'187px',height:"180px"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></Image>
                    <h1 style={{ color: "white" }}>React</h1>
                </Box>
                <Box background='#212121;'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <h1 style={{ color: "white" }}>HTML</h1>
                </Box>
                <Box background='#212121;'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <h1 style={{ color: "white" }}>CSS</h1>
                </Box>
                <Box background='#212121;'>

                    <img style={{borderRadius:'30px'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <h1 style={{ color: "white" }}>JS</h1>
                </Box>
                <Box background='#212121;'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    <h1 style={{ color: "white" }}>MongoDb</h1>
                </Box>
                <Box background='#212121;'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                    <h1 style={{ color: "white" }}>NodeJs</h1>
                </Box>
                <Box background='#212121;'>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                    <h1 style={{ color: "white" }}>Express</h1>
                </Box>
                <Box background='#212121;'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />

                    <h1 style={{ color: "white" }}>Bootstrap</h1>
                </Box>
                <Box background='#212121;'>

                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                    <h1 style={{ color: "white" }}>Redux</h1>
                </Box>

            </Boxes>
        </Container>
    </>
}