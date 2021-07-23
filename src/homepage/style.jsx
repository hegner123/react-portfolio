import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MenuBar = styled.header`
  font-family: Roboto;
  padding: 20px 25px;
  background: var(--dark-blue);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin-left: 20px;
  > * {
    &:first-child {
      margin-left: 0;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > * {
      margin-left: 20px;
      margin-top: 0;
      &:first-child {
        margin-left: 20px;
      }
    }
  }
`;
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  display: ${(props) => (props.mobile ? "flex" : "none")};
  font-size: var(--font-size);
  @media (min-width: 768px) {
    display: ${(props) => (props.desktop ? "flex" : "none")};
  }
`;

export const NavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-size: var(--font-size);
  font-weight: 300;
`;
