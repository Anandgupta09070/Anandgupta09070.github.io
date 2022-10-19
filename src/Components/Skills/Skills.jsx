import React from "react";
import { Box, Boxes, BoxesItems, Headline } from "./SkillsStyle";
export default function Skills() {
// <a href="https://iconscout.com/icons/code" target="_blank">Code Icon</a> by <a href="https://iconscout.com/contributors/maninderkaur" target="_blank">maninderkaur</a>
    return <>
        <Box>
            <Headline>My Services</Headline>
            <Boxes>
                <BoxesItems>
                    <div style={{padding:"20px"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="181.424" height="126.936"><path d="M51.895 106.535a9.039 9.039 0 0 1-6.018-2.284L0 63.469l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.296 63.469l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228-33.176 29.484a9.068 9.068 0 0 0 12.036 13.566Zm-42.408 12.846 18.133-108.8a9.063 9.063 0 1 0-17.878-2.986l-18.134 108.8a9.066 9.066 0 0 0 7.452 10.438 9.616 9.616 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571Z"/></svg>
                    </div>
                    <div style={{fontSize:'50px',color:'white'}}>WebDesign</div>
                </BoxesItems>
                <BoxesItems>
                    <div style={{padding:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="181.424" height="126.936"><path d="M51.895 106.535a9.039 9.039 0 0 1-6.018-2.284L0 63.469l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.296 63.469l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228-33.176 29.484a9.068 9.068 0 0 0 12.036 13.566Zm-42.408 12.846 18.133-108.8a9.063 9.063 0 1 0-17.878-2.986l-18.134 108.8a9.066 9.066 0 0 0 7.452 10.438 9.616 9.616 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571Z"/></svg></div>
                    <div style={{fontSize:'50px',color:'white'}}>Front End</div>
                </BoxesItems>
                <BoxesItems>
                    <div style={{padding:"20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="181.424" height="126.936"><path d="M51.895 106.535a9.039 9.039 0 0 1-6.018-2.284L0 63.469l48.427-43.05a9.066 9.066 0 0 1 12.042 13.555L27.296 63.469l30.628 27.217a9.072 9.072 0 0 1-6.018 15.85Zm81.1-.017 48.427-43.05-45.876-40.782a9.065 9.065 0 0 0-12.038 13.554l30.628 27.228-33.176 29.484a9.068 9.068 0 0 0 12.036 13.566Zm-42.408 12.846 18.133-108.8a9.063 9.063 0 1 0-17.878-2.986l-18.134 108.8a9.066 9.066 0 0 0 7.452 10.438 9.616 9.616 0 0 0 1.5.119 9.068 9.068 0 0 0 8.931-7.571Z"/></svg></div>
                    <div style={{fontSize:'50px',color:'white'}}>Back End</div>
                </BoxesItems>
            </Boxes>
        </Box>
    </>

}