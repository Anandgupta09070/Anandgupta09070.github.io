import styled from "styled-components";

export const Box = styled.div`
border:1px solid black;
width:100%;
background-color:black;
height:auto;
`
export const Headline = styled.div`
color: white;
font-size: 39px;
margin-top: 65px;
text-align: center;
`

export const Boxes= styled.div`
    width:100%;
    height:auto;
    margin-top:46px;
    display :flex;
    padding-left:52px
    align-items:center;
    justify-content: center;
    flex-wrap:wrap;
` 
export const BoxesItems = styled.div`
background:black;
border: 1px solid white;
height: 100%;
width: 405px;
margin-right:13px;
transition: 2s background;
transition-delay:1s;
border-radius:20px;
margin-bottom:20px;
&:hover{
    background: linear-gradient(to right, #1aa1af, #2890aa, #3b7e9f, #496d8f, #505c7c);
    $div{
        color:black;
    }
}
`