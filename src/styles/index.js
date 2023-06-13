import { createGlobalStyle } from "styled-components";

const indexStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #1A202C;
    font-family: Amatic SC;
  }
`;

export default indexStyle;
