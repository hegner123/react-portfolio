import styled from "styled-components";


export const Main = styled.main`
display:flex;
flex-direction: column;
@media(min-width: 768px) {
    flex-direction: row;
  }
`

export const NavList = styled.ul`
display: flex;
width:25%;
> * {
    margin-left:20px;
    margin-top:10px;

    &:first-child {
      margin-left: 0;
    }
  }

@media(min-width: 768px) {
    > * {
    margin-left:20px;
    margin-top:0;
    &:first-child {
      margin-left: 20px;
    }
    }
}
`

export const NavItem = styled.li`
display: flex;
font-size:var(--font-size);
@media(min-width: 768px) {
  }
`

export const NavBar = styled.div`
display: flex;
flex-direction:column;

@media(min-width: 768px) {
    flex-direction: row;
    
  }
`

