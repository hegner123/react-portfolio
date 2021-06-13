import React from 'react';
import { css } from 'styled-components';
import {ResourceImg, InfoBlock, AboutImgContainer, AboutImg, AboutBody, AboutListItem, Title1, Title2, Title3, AboutBio} from './style';
import profilePic from 'url:../../../public/mlh-crop.jpg';
import w3schools from 'url:../../../public/w3.png'
import htmlatt from 'url:../../../public/htmlatt.png';
import jw from 'url:../../../public/jw.jpeg';
import syntax from 'url:../../../public/logo.png';



export function About(props){
        return (
            <InfoBlock>
                <AboutImgContainer >
                    <AboutImg src={profilePic} alt="Michael Hegner" css={""} />
                </AboutImgContainer>
                <AboutBody>
                    <div>
                        <Title1>Michael Hegner</Title1>
                        <Title2>Full Stack Developer</Title2>
                        <Title3>Audio Engineer</Title3>
                    </div>
                    <AboutBio >
                        <p>MERN Full Stack Web Developer with a background in Audio Engineering and a passion for problem solving. Experienced with creative troubleshooting under pressure. Valued for a detailed approach to learning new skills and an adaptable mindset, switching between tasks quickly and efficiently.</p>
                    </AboutBio>
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
                </AboutBody>
            </InfoBlock>
        )
    }


// function mapState(state) {
//     const { users, authentication } = state;
//     const { user } = authentication;
//     return { user, users };
// }

// const actionCreators = {
//     getUsers: userActions.getAll,
//     deleteUser: userActions.delete
// }

// const connectedHomePage = connect(mapState, actionCreators)(HomePage);
// export { connectedHomePage as HomePage };