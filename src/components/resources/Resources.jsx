import React from "react";
import {
  Resources,
  ResourceImg,
  ResourcesListItem,
  ResourcesBio,
  Title4,
} from "./style";
import w3schools from "url:../../../public/w3.png";
import htmlatt from "url:../../../public/htmlatt.png";
import jw from "url:../../../public/jw.jpeg";
import syntax from "url:../../../public/logo.png";

export const Resource = (props) => {
  return (
    <Resources>
      <ResourcesBio css={"width:50%;padding:0 150px"}>
        <Title4 css={"font-size:20px;"}>I learn from:</Title4>
        <div>
          <ul
            css={
              "display:flex; justify-content:flex-start; flex-wrap:wrap;width:50%;"
            }
          >
            <ResourcesListItem>
              <a href="https://syntax.fm/">
                <ResourceImg
                  src={syntax}
                  alt="Syntax podcast"
                  css={"width:100%"}
                />
              </a>
            </ResourcesListItem>
            <ResourcesListItem>
              <a href="https://www.w3schools.com/">
                <ResourceImg
                  src={w3schools}
                  alt="w3 Schools"
                  css={"width:100%"}
                />
              </a>
            </ResourcesListItem>
            <ResourcesListItem>
              <a href={"https://podcast.htmlallthethings.com/"}>
                <ResourceImg
                  src={htmlatt}
                  alt="html all the things podcast"
                  css={"width:100%"}
                />
              </a>
            </ResourcesListItem>
            <ResourcesListItem>
              <a href="https://jasonwatmore.com/">
                <ResourceImg src={jw} alt="Jason Watmore" css={"width:100%"} />
              </a>
            </ResourcesListItem>
          </ul>
        </div>
      </ResourcesBio>
    </Resources>
  );
};
