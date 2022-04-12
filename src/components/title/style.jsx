import styled, { keyframes } from "styled-components";

export const Name = styled.h1`
  font-size: 4rem;
  text-align: center;
`;

export const Position = styled.h2`
  padding-top: 2rem;
  font-size: 2rem;
  text-align: center;
  width: 75%;
  @media (min-width: 900px) {
    width: 100%;
  }
`;

export const TitleSection = styled.div`
  background: var(--bg);
  min-width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    max-width: 75%;
  }
`;
