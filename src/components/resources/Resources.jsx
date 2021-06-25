import React from 'react';
import {ResourceImg, InfoBlock, AboutImgContainer, AboutImg, AboutBody, AboutListItem, Title1, Title2, Title3, AboutBio} from './style';
import w3schools from 'url:../../../public/w3.png'
import htmlatt from 'url:../../../public/htmlatt.png';
import jw from 'url:../../../public/jw.jpeg';
import syntax from 'url:../../../public/logo.png';

export const Resources = props => {
    return (
        <AboutBio css={"margin-top:10px;width:50%"}>
        <h4 css={"font-size:20px;"}>I learn from:</h4>
        <div>
            <ul css={"display:flex; justify-content:flex-start; flex-wrap:wrap;"}>
                <AboutListItem>
                    <a href="https://syntax.fm/">
                        <ResourceImg src={syntax} alt="Syntax podcast" css={"width:100%"}/>
                    </a>
                </AboutListItem>
                <AboutListItem>
                    <a href="https://www.w3schools.com/">
                        <ResourceImg src={w3schools} alt="w3 Schools" css={"width:100%"}/>
                    </a>
                </AboutListItem>
                <AboutListItem>
                    <a href={"https://podcast.htmlallthethings.com/"}>
                        <ResourceImg src={htmlatt} alt="html all the things podcast" css={"width:100%"}/>
                    </a>
                </AboutListItem>
                <AboutListItem>
                    <a href="https://jasonwatmore.com/">
                        <ResourceImg src={jw} alt="Jason Watmore" css={"width:100%"}/>
                    </a>
                </AboutListItem>
            </ul>
        </div>
    </AboutBio>
    )
}