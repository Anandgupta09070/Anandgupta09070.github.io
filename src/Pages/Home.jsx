import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/HeaderStyle/Header";
import About from "../Components/About/About";
import Skills from "../Components/Skills/Skills";
import ContactMe from "../Components/ContactMe/Contact";
import Projects from "../Components/Projects/Project";
import Services from "../Components/Services/Services";
import { useRef } from "react";

export default function Home (){
    const refContact = useRef();
    const refHead = useRef();
    const refAbout = useRef();
    const refServices = useRef();
    const refSkills = useRef();
    const refProject = useRef();
    return <>
    <Navbar refContact = {refContact} refAbout = {refAbout} refHead= {refHead} refProject= {refProject} refServices={refServices} refSkills={refSkills} />
    <Header ref={refHead}/>
    <About  ref={refAbout}/>
    <Skills ref={refSkills}/>
    <Services ref={refServices}/>
    <Projects ref={refProject}/>
    <ContactMe ref={refContact}/>
        </>
}