import React, { useEffect, useState } from "react";
import {
  InfoBlock,
  TechList,
  Title3,
  TechItem,
  TechText,
  Section,
  Text,
} from "../style/style";

import anime from "animejs/lib/anime.es.js";

export const Bio = (props) => {
  useEffect(() => {
    anime({
      targets: ".animation",
      translateX: 50,
    });
  }, []);

  function handleAnimationEnter(element) {
    anime({
      targets: `.${element}`,
      translateX: 5,
    });
  }

  function handleAnimationLeave(element) {
    anime({
      targets: `.${element}`,
      translateX: -5,
    });
  }
  function handleAnimationClick(element) {
    anime({
      targets: `.${element}`,
      translateX: [
        2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 7, -7, 6, -6, 5, -5, 4,
        -4, 3, -3, 2, -2, 0,
      ],
      duration: 100,
      easing: "easeInOutBounce",
    });

    element.animation.play();
  }

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
        <TechList className="animation">
          <TechItem
            onMouseEnter={(e) => handleAnimationEnter(e.target.classList[2])}
            onMouseLeave={(e) => handleAnimationLeave(e.target.classList[2])}
            onClick={(e) => handleAnimationClick(e.target.classList[2])}
            className="mongo">
            <TechText>MongoDB</TechText>
          </TechItem>
          <TechItem
            onMouseEnter={(e) => handleAnimationEnter(e.target.classList[2])}
            onMouseLeave={(e) => handleAnimationLeave(e.target.classList[2])}
            onClick={(e) => handleAnimationClick(e.target.classList[2])}
            className="express">
            <TechText>Express</TechText>
          </TechItem>
          <TechItem
            onMouseEnter={(e) => handleAnimationEnter(e.target.classList[2])}
            onMouseLeave={(e) => handleAnimationLeave(e.target.classList[2])}
            onClick={(e) => handleAnimationClick(e.target.classList[2])}
            className="react">
            <TechText>React</TechText>
          </TechItem>
          <TechItem
            onMouseOver={(e) => handleAnimationEnter(e.target.classList[2])}
            onMouseLeave={(e) => handleAnimationLeave(e.target.classList[2])}
            onClick={(e) => handleAnimationClick(e.target.classList[2])}
            className="node">
            <TechText>Node</TechText>
          </TechItem>
        </TechList>
      </Section>
    </InfoBlock>
  );
};
