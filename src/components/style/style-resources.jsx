import styled from "styled-components";

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
