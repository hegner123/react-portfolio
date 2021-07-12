import React, { useState } from "react";
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
import pps1 from "url:../../../public/pps-example1.png";
import pps2 from "url:../../../public/pps-example2.png";
import chevLeft from "url:../../../public/icons/chevron_left.svg";
import chevRight from "url:../../../public/icons/chevron_right.svg";

export const Projects = (props) => {
  const [image, setImage] = useState(homepagePic);
  const [counter, setCounter] = useState(0);
  const imgs = [homepagePic, pps1, pps2];

  function changeImage(i) {
    setCounter(counter + i);

    if (counter === 2) {
      setCounter(0);
    } else if (counter < 0) {
      setCounter(2);
    }
    console.log(counter);
    setImage(imgs[counter]);
  }

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
              <chevLeft
                css={"fill:#000;height:100px;width:100px;"}
                onClick={() => changeImage(-1)}
              />
              <ProjectImgContainer>
                <ProjectImg
                  src={image}
                  alt="ProProject Studio"
                  css={"width:100%;border-radius:5px;overflow:hidden"}
                />
              </ProjectImgContainer>
              <chevRight
                css={"fill:#000;height:100px;width:100px;"}
                onClick={() => changeImage(1)}
              />
            </ProjectWrapper>
          </ProjectListItem>
        </ProjectList>
      </ProjectBody>
    </InfoBlock>
  );
};
