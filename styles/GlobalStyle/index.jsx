import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    box-sizing: border-box;
  }  
  body {
    background: "#24292e";
    color: "rgba(255, 255, 255, 0.87)";
  }
  ol, ul {
    list-style: none;
    padding-left: 0;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;