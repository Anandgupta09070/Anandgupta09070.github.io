import React from "react"
import {useState} from 'react';
import './Navbar.css';
import {
 NavNam,Nav,OptionItem,Options, Link
} from './NavbarStyled'
export default function Navbar(props){
    console.log(props)
    const [colorChange,setColorChange] = useState(false);
    const ChangeNavColor = ()=>{
        if(window.scrollY >= 30){
            setColorChange(true)
        }
        else{
            setColorChange(false);
        }
    }
    window.addEventListener('scroll',ChangeNavColor);
    return <>
        <Nav  id={colorChange?"change":"navbar"}>
            <NavNam color={colorChange?"white":"#ff8a65"}>
              Anand Kumar Gupta
            </NavNam>
            <div className="options">
                <Options>
                    <Link href="/#Header"><OptionItem>Home</OptionItem></Link>
                    <Link href="#"><OptionItem>About</OptionItem></Link>
                    <Link href="/#Skills"><OptionItem>Skills</OptionItem></Link>
                    <Link href="#"><OptionItem>Projects</OptionItem></Link>
                    <Link href="#"><OptionItem>Contact</OptionItem></Link>
                </Options>
            </div>
        </Nav>
    </>
}