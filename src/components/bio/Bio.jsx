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
        <p css={"margin-top:0.75rem;"}>Looking for new challenges!</p>
        <Text>
          I'm a full stack developer with a background in audio engineering. I
          love problem solving and making applications to make my life easier.
          You can find some examples of my work on my github or below.
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
