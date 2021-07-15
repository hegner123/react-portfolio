import styled from "styled-components";

export const ResourceImg = styled.img`
  filter: grayscale(1);
  transition-duration: 300ms;
  &:hover {
    filter: grayscale(0);
  }
`;

export const InfoBlock = styled.div`
  background: var(--bg);
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
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

export const ProjectBody = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProjectBio = styled.div`
  margin-top: 10px;
  width: 75%;
  @media (min-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const ProjectList = styled.ul`
  padding: 20px;
`;

export const ProjectListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProjectDescription = styled.div`
  width: 75%;
  padding: 100px;
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
    padding: 0;
  }
`;

export const ProjectLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  &:hover {
    color: #707070;
    cursor: pointer;
  }
`;

export const ProjectLinkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ProjectWrapper = styled.div`
  display: flex;
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
