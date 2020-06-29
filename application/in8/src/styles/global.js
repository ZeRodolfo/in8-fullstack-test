import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Helvetica";
    src: url("/fonts/helvetica-neue-ultralight.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Regular";
    src: url("/fonts/Roboto-Regular_0.ttf") format("truetype");
  }

  @font-face {
    font-family: "Roboto-Light";
    src: url("/fonts/Roboto-Light_0.ttf") format("truetype");
  }

  @font-face {
    font-family: "PS";
    src: url("/fonts/ps.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  /**
   * Tests of fonts
   */
  h1 {
    font-family: "Roboto Regular";
  }

  h2 {
    font-family: "Helvetica UltraLight";
  }

  h3 {
    font-family: "Roboto Light";
  }

  h4 {
    font-family: "PS";
  }
  /**
   * End Tests of fonts
   */
  
  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    cursor: pointer;
  }

  @media print{
    *{
      box-shadow: none !important;
    }
  }
`;
