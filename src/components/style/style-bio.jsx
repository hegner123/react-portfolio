import styled from "styled-components";

export const InfoBlock = styled.div`
  display: grid;
  grid-template-columns: var(--grid);
  width: 100%;
  background: var(--bg-accent);
`;

export const TechList = styled.ul`
  display: grid;
  grid-template-columns: var(--grid);
`;

export const TechItem = styled.li`
  margin: 10px auto;
`;

export const TechText = styled.p`
  padding: 15px 0;
  background: var(--white);
  text-align: center;
  min-width: 10em;
`;

export const AboutBody = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;
  @media (min-width: 768px) {
  }
`;

export const AboutBio = styled.div`
  margin-top: 10px;
  width: 75%;
  padding: 0 20px;
  @media (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 50%;
    padding: 100px;
  }
`;

export const Title1 = styled.h1`
  font-size: 30px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    padding: 0 50px;
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
  font-size: 2rem;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
