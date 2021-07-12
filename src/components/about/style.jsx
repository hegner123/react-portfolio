import styled from "styled-components";

export const Section = styled.section`
background:var(--bg);
  min-height: 400px;
  padding:0 150px;
  display:flex;
  justify-content: flex-start;
  align-items: center;

`;

export const Title1 = styled.h1`
  font-size: 30px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title2 = styled.h2`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const Title3 = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
