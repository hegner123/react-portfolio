import React from "react";
import {
  Resources,
  ResourceImg,
  ResourcesListItem,
  ResourcesBio,
  ResourcesImgContainer,
  ResourcesList,
} from "../style/style";
import w3schools from "url:../../../public/w3.png";
import htmlatt from "url:../../../public/htmlatt.png";
import jw from "url:../../../public/jw.jpeg";
import syntax from "url:../../../public/logo.png";

export const Resource = (props) => {
  return (
    <Resources>
      <ResourcesBio>
        <h4 css={"font-size:20px;"}>I learn from:</h4>
        <div>
          <ResourcesList>
            <ResourcesListItem>
              <ResourcesImgContainer>
                <a href="https://syntax.fm/">
                  <ResourceImg src={syntax} alt="Syntax podcast" />
                </a>
              </ResourcesImgContainer>
            </ResourcesListItem>
            <ResourcesListItem>
              <ResourcesImgContainer>
                <a href="https://www.w3schools.com/">
                  <ResourceImg src={w3schools} alt="w3 Schools" />
                </a>
              </ResourcesImgContainer>
            </ResourcesListItem>
            <ResourcesListItem>
              <ResourcesImgContainer>
                <a href={"https://podcast.htmlallthethings.com/"}>
                  <ResourceImg
                    src={htmlatt}
                    alt="html all the things podcast"
                  />
                </a>
              </ResourcesImgContainer>
            </ResourcesListItem>
            <ResourcesListItem>
              <ResourcesImgContainer>
                <a href="https://jasonwatmore.com/">
                  <ResourceImg src={jw} alt="Jason Watmore" />
                </a>
              </ResourcesImgContainer>
            </ResourcesListItem>
          </ResourcesList>
        </div>
      </ResourcesBio>
    </Resources>
  );
};
