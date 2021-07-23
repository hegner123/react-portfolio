// Menu.js
import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./style";
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="https://github.com/hegner123" target="_none">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        Github
      </a>
      <a href="https://www.linkedin.com/in/michaelhegner/" target="_none">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        LinkedIn
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </a>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export { Menu };
