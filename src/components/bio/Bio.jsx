import React from "react";
import {
  InfoBlock,
  AboutBody,
  TechList,
  Title1,
  Title2,
  Title3,
  AboutBio,
  TechItem,
  TechText,
} from "../style/style-bio";

export const Bio = (props) => {
  return (
    <InfoBlock css={"min-height:50vh;"}>
      <AboutBody>
        <AboutBio>
          <div>
            <Title3>Michael Hegner</Title3>
          </div>
          <p css={"max-width:40em;"}>
            MERN Full Stack Web Developer with a background in Audio Engineering
            and a passion for problem solving. Experienced with creative
            troubleshooting under pressure. Valued for a detailed approach to
            learning new skills and an adaptable mindset, switching between
            tasks quickly and efficiently.
          </p>
        </AboutBio>

        <AboutBio>
          <TechList>
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
          </TechList>
        </AboutBio>
      </AboutBody>
    </InfoBlock>
  );
};
