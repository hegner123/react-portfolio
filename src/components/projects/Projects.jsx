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
  const [counter, setCounter] = useState(1);
  const imgs = [homepagePic, pps1, pps2];

  function changeImg(n) {
    if (counter + n < 0) {
      setCounter(imgs.length - 1);
    } else if (counter + n > imgs.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + n);
    }

    setImage(imgs[counter]);
    console.log(counter);
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
                css={"fill:#000;height:100px;width:100px; cursor:pointer"}
                onClick={() => changeImg(-1)}
              />
              <ProjectImgContainer>
                <ProjectImg
                  src={image}
                  alt="ProProject Studio"
                  css={"width:100%;border-radius:5px;overflow:hidden"}
                />
              </ProjectImgContainer>
              <chevRight
                css={"fill:#000;height:100px;width:100px;cursor:pointer"}
                onClick={() => changeImg(1)}
              />
            </ProjectWrapper>
          </ProjectListItem>
        </ProjectList>
      </ProjectBody>
    </InfoBlock>
  );
};
