import React from 'react';
import { render } from 'react-dom';
import { css } from 'styled-components';
import {ResourceImg, InfoBlock, ProjectImgContainer, ProjectImg, ProjectBody, Title1, Title2, Title3, ProjectList, ProjectListItem, ProjectDescription, ProjectLinkList, ProjectLink} from './style';
import homepagePic from 'url:../../../public/homepage.png';


export function Projects(props){

        return (
                    <InfoBlock >
                        <ProjectBody >
                            <div>
                                
                                <Title3>Current Projects</Title3>
                                <ProjectList>
                                    <ProjectListItem>
                                        <ProjectDescription>
                                            <Title3 >
                                                <ProjectLink href="https://proprojectstudio.com">
                                                    ProProject Studio
                                                </ProjectLink>
                                            </Title3>
                                            <p css={"margin-top:10px;"}>ProProject Studio (PPS) is a project management tool created for recording engineers, mixing engineers, mastering engineers, and their respective clients. PPS focuses on three main asspects of the recording or mixing process. These steps are Pre-production, Tracking, and Mixing.</p>
                                            <ProjectLinkList>
                                                <ProjectLink href="https://github.com/hegner123/pps-front">Front-End Repo</ProjectLink>
                                                <ProjectLink href="https://github.com/hegner123/pps-back">Back-End Repo</ProjectLink>
                                            </ProjectLinkList>
                                        </ProjectDescription>

                                        <ProjectImgContainer>
                                            <ProjectImg src={homepagePic} alt="ProProject Studio" css={"width:100%;border-radius:5px;overflow:hidden"} />
                                        </ProjectImgContainer>
                                    </ProjectListItem>
                                </ProjectList>
                            </div>
                        </ProjectBody>
                    </InfoBlock>
        )
    }