import React from "react";
import {
  InfoBlock,
  AboutBody,
  Title1,
  Title2,
  Title3,
  AboutBio,
  TechItem,
  TechText,
} from "./style";

export const Bio = (props) => {
  return (
    <InfoBlock css={"min-height:50vh;"}>
      <AboutBody>
        <AboutBio css={"width:50%;"}>
          <div>
            <Title1>Michael Hegner</Title1>
          </div>
          <p>
            MERN Full Stack Web Developer with a background in Audio Engineering
            and a passion for problem solving. Experienced with creative
            troubleshooting under pressure. Valued for a detailed approach to
            learning new skills and an adaptable mindset, switching between
            tasks quickly and efficiently.
          </p>
        </AboutBio>
        <div css={"width:50%;"}>
          <ul>
            <TechItem>
              <TechText>React</TechText>
            </TechItem>
            <TechItem>
              <TechText>Express</TechText>
            </TechItem>
            <TechItem>
              <TechText>Node</TechText>
            </TechItem>
            <TechItem>
              <TechText>MongoDB</TechText>
            </TechItem>
          </ul>
        </div>
      </AboutBody>
    </InfoBlock>
  );
};
