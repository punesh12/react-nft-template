import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  #root {
    max-width: 1440px;
    margin: 0 auto;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Space Mono", monospace;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Space Mono", monospace;
  }

  a {
    color: ${(props) => props.theme.text};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  button:hover{
  outline: none;
  }
`;

export default GlobalStyles;
