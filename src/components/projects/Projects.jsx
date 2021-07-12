import React from "react";
import {
  InfoBlock,
  ProjectWrapper,
  ProjectImgContainer,
  ProjectImg,
  ProjectBody,
  Title3,
  ProjectList,
  ProjectListItem,
  ProjectDescription,
  ProjectLinkList,
  ProjectLink,
} from "./style";
import homepagePic from "url:../../../public/homepage.png";

export const Projects = (props) => {
  return (
    <InfoBlock>
      <ProjectBody>
        <ProjectList>
          <div css={"padding:0 150px;"}>
            <Title3>Current Projects</Title3>
          </div>
          <ProjectListItem>
            <ProjectWrapper>
              <ProjectDescription>
                <Title3>
                  <ProjectLink href="https://proprojectstudio.com">
                    ProProject Studio
                  </ProjectLink>
                </Title3>
                <p css={"margin-top:10px;"}>
                  ProProject Studio (PPS) is a project management tool created
                  for recording engineers, mixing engineers, mastering
                  engineers, and their respective clients. PPS focuses on three
                  main asspects of the recording or mixing process. These steps
                  are Pre-production, Tracking, and Mixing.
                </p>
                <ProjectLinkList>
                  <ProjectLink href="https://github.com/hegner123/pps-front">
                    Front-End Repo
                  </ProjectLink>
                  <ProjectLink href="https://github.com/hegner123/pps-back">
                    Back-End Repo
                  </ProjectLink>
                </ProjectLinkList>
              </ProjectDescription>
            </ProjectWrapper>
            <ProjectWrapper>
              <ProjectImgContainer>
                <ProjectImg
                  src={homepagePic}
                  alt="ProProject Studio"
                  css={"width:100%;border-radius:5px;overflow:hidden"}
                />
              </ProjectImgContainer>
            </ProjectWrapper>
          </ProjectListItem>
        </ProjectList>
      </ProjectBody>
    </InfoBlock>
  );
};
