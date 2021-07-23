import React from "react";
import {
  InfoBlock,
  TechList,
  Title3,
  TechItem,
  TechText,
  Section,
  Text,
} from "../style/style";

export const Bio = (props) => {
  return (
    <InfoBlock>
      <Section>
        <Title3>Michael Hegner</Title3>
        <Text>
          MERN Full Stack Web Developer with a background in Audio Engineering
          and a passion for problem solving. Experienced with creative
          troubleshooting under pressure. Valued for a detailed approach to
          learning new skills and an adaptable mindset, switching between tasks
          quickly and efficiently.
        </Text>
      </Section>
      <Section>
        <TechList>
          <TechItem>
            <TechText>MongoDB</TechText>
          </TechItem>
          <TechItem>
            <TechText>Express</TechText>
          </TechItem>
          <TechItem>
            <TechText>React</TechText>
          </TechItem>
          <TechItem>
            <TechText>Node</TechText>
          </TechItem>
        </TechList>
      </Section>
    </InfoBlock>
  );
};
