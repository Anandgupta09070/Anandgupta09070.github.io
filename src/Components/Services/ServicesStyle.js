import styled from "styled-components";

export const Box = styled.div`
height:200px;
width:200px;
padding:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
border-radius:30px;
border-radius:30px;
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
`

export const Image = styled.img`
width: 146px;
height: 145px;
`