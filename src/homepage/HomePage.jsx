import React from "react";
import { render } from "react-dom";
import { About } from "../components/about";
import { Bio } from "../components/bio";
import { Footer } from "../components/footer";
import { Projects } from "../components/projects";
import { Resource } from "../components/resources";
import { Title } from "../components/title";
import { Main, NavBar, NavList, NavItem } from "./style";
import styled, { keyframes } from "styled-components";

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

export function HomePage() {
  return (
    <div className="homepage">
      <header css={"font-family:Roboto;padding:20px 25px;"}>
        <nav>
          <NavBar css={"display:flex;"}>
            <div>
              <a
                href="/"
                css={
                  "color:var(--text-color);text-decoration:none;font-size:var(--font-size)"
                }
              >
                Michael Hegner
              </a>
            </div>
            <NavList css={"display:flex;"}>
              <NavItem>
                <a
                  href="https://github.com/hegner123"
                  target="_none"
                  css={"color:var(--text-color);text-decoration:none;"}
                >
                  Github
                </a>
              </NavItem>
              <NavItem>
                <a
                  href="https://www.linkedin.com/in/michaelhegner/"
                  target="_none"
                  css={"color:var(--text-color);text-decoration:none;"}
                >
                  LinkedIn
                </a>
              </NavItem>
            </NavList>
          </NavBar>
        </nav>
      </header>
      <Main css={"width:100%;display:block;"}>
        <Title />
        <Bio />
        <Projects />
        <Resource />
        <About />
        <Footer />
      </Main>
    </div>
  );
}
