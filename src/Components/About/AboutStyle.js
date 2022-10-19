import styled from "styled-components";

export const Action = styled.div`
background-image: linear-gradient(to right, #924B89, #2890aa, #3b7e9f, #496d8f, #505c7c);

max-width: 100%;
height:auto;
margin-top:200px
`


export const Heading=styled.div`
color: BLACK;
font-size: 40px;
padding-top: 75px;
&:after{
    content:" ";
}`

export const Profile = styled.div`
    max-width:100%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:auto;
    margin-top:50px
`
export const Image = styled.img`
    width:32%;
    height:31vw;
    border-radius:50%;

`
export const Details = styled.div`
    width:50%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    
`

