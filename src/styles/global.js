import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    font-color:#878787;
    background-color: #F5F5F5;
    font-family: Amatic SC;
  }
`;

export default GlobalStyle;
