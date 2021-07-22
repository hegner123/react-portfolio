import styled from "styled-components";

// General
export const Body = styled.div`
  display: flex;
  width: 100%;
`;

export const InfoBlock = styled.div`
  width: 100%;
  padding: 100px 0;
  background: ${(props) => props.bg || "var(--bg-accent)"};
  margin: 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Section = styled.section`
  margin: 0;
  padding: 0 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title1 = styled.h1`
  font-size: 50px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title2 = styled.h2`
  font-size: 40px;
  margin-top: 10px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
export const Title3 = styled.h3`
  font-size: 30px;
  padding-top: 3rem;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Text = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const SectionBody = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
//Sections

//Bio
export const Biog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding-left: 170px;
`;
export const TechList = styled.ul`
  width: 50%;
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

//Project

export const ProjectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectBody = styled.div`
  width: 100%;
  background: ${(props) => props.bg || "var(--bg-accent)"};
`;

export const ProjectList = styled.ul`
  padding: 0 150px;
`;

export const ProjectListItem = styled.li`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectDescription = styled.div`
  width: 75%;

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    padding: 0;
  }
`;

export const ProjectBio = styled.div`
  margin-top: 10px;
  width: 75%;
  @media (min-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const ProjectLinkItems = styled.li`
  margin-left: 1rem;
  &:first-child {
    margin-left: 0px;
  }
`;

export const ProjectLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  border-bottom: 2px solid var(--white);
  margin-bottom: 10px;
  &:hover {
    color: #707070;
    cursor: pointer;
  }
`;

export const ProjectLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
export const ProjectImgContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
  }
`;

export const ProjectImg = styled.img`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
`;

//Resources

export const Resources = styled.div`
  background: var(--bg-accent);
  min-height: 400px;
  display: flex;
  align-items: center;
  padding: 40px;
`;

export const ResourcesBody = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
  }
`;

export const ResourcesBio = styled.div`
  width: 75%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ResourcesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 20px;
`;

export const ResourcesListItem = styled.li`
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
`;

export const ResourceImg = styled.img`
  width: 100%;
  transition-duration: 300ms;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
    overflow: hidden;
  }
`;

export const ResourcesImgContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
