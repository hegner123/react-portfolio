// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./style";
import { Github } from "../../../public/icons/github.svg";
import { Linkedin } from "../../../public/icons/linkedin.svg";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="https://github.com/hegner123" target="_none">
        <span role="img" aria-label="github" css={"margin-right:10px;"}>
          <Github css={"height:1.5rem;width:1.5rem;"} />
        </span>
        <span>Github</span>
      </a>
      <a href="https://www.linkedin.com/in/michaelhegner/" target="_none">
        <span role="img" aria-label="linkedin" css={"margin-right:10px;"}>
          <Linkedin css={"height:1.5rem;width:1.5rem;"} />
        </span>
        <span>LinkedIn</span>
      </a>
      {/* <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a> */}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export { Menu };
