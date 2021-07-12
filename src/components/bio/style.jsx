import styled from "styled-components";

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--bg-accent);
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const TechItem = styled.li`
  margin: 10px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TechText = styled.p`
  padding: 15px;
  background: #fff;
  text-align: center;
  width: 20%;
`;

export const AboutBody = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const AboutBio = styled.div`
  margin-top: 10px;
  width: 75%;
  padding: 50px;

  @media (min-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
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
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;


