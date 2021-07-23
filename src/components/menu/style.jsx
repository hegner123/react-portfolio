import styled from "styled-components";

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--white);
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

  @media (max-width: 600px) {
    width: 100%;
  }

  a {
    display: flex;
    width: 50%;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 2rem 0;
    font-weight: 400;
    letter-spacing: 0.5rem;
    color: var(--dark);
    text-decoration: none;
    border-bottom: 1px solid transparent;

    @media (max-width: 600px) {
      font-size: 1.5rem;
      text-align: left;
    }

    a span {
      margin: 2rem;
    }

    &:hover {
      border-bottom: 1px solid var(--warn);
    }
  }
`;
