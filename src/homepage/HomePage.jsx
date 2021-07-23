import React, { useState } from "react";
import { About } from "../components/about";
import { Bio } from "../components/bio";
import { Footer } from "../components/footer";
import { Projects } from "../components/projects";
import { Resource } from "../components/resources";
import { Title } from "../components/title";
import { Main, NavBar, NavList, NavItem, MenuBar, NavLink, Logo } from "./style";
import styled, { keyframes } from "styled-components";
import { Burger, Menu } from "../components/";

const rotate = keyframes`

from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <MenuBar>
        <nav>
          <NavBar>
            <Logo>
              <NavLink href="/" css={""}>
                Michael Hegner
              </NavLink>
            </Logo>
            <NavList>
              <NavItem desktop>
                <NavLink href="https://github.com/hegner123" target="_none">
                  Github
                </NavLink>
              </NavItem>
              <NavItem desktop>
                <NavLink
                  href="https://www.linkedin.com/in/michaelhegner/"
                  target="_none"
                >
                  LinkedIn
                </NavLink>
              </NavItem>
              <NavItem mobile>
                <Burger open={isOpen} setOpen={setOpen} />
                <Menu open={isOpen} setOpen={setOpen} />
              </NavItem>
            </NavList>
          </NavBar>
        </nav>
      </MenuBar>

      <Main css={"width:100%;display:block;"}>
        <Title />
        <Bio />
        <Projects />
        <Footer />
      </Main>
    </div>
  );
};
