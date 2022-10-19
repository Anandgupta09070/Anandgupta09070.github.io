import { Action, Heading, Profile, Image, Details } from "./AboutStyle"
import logo from './Anand profile pic.png';
export default function About() {
    return <>
        <Action>
            <Heading>About Me</Heading>
            <Profile>
                <Image src={logo} alt="profile.pic"></Image>
                <Details>
                    <span style={{
                        fontSize: "2.5vw",
                        display: "flex",
                        marginTop: "auto",
                    }} >I am Anand Kumar Gupta</span>
                    <p style={{    textAlign: "justify",
                        fontSize: "1.5vw"}}>
                        Aspirant Full Stack Web Developer, experienced
                        in real-life projects with strong knowledge of
                        React JS. Highly adaptive and eager to learn new
                        technologies, Looking forward to the opportunity
                        to work in a company such as yours, to contribute
                        with proficient Tech and Soft skills.
                    </p>
                </Details>
            </Profile>
        </Action>
    </>
}