import styled from "styled-components";

export const Resources = styled.div`
  background: var(--bg-accent);
  min-height: 400px;
  display: flex;
  align-items: center;
`;

export const ResourceImg = styled.img`
  transition-duration: 300ms;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: scale(1.2);
    overflow: hidden;
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ResourcesImgContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    width: 100%;
    padding: 25px;
  }
`;

export const ResourcesImg = styled.img`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
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

  @media (min-width: 768px) {
    width: 100%;
    margin-left: 50px;
    margin-right: 50px;
  }
`;

export const ResourcesListItem = styled.li`
  width: 25%;
  overflow: hidden;
  border-radius: 15px;
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
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const Title4 = styled.h4`
  font-size: 20px;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;
