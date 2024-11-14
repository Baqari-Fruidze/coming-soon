import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Chivo:ital,wght@0,100..900;1,100..900&display=swap');
  @font-face {
    font-family: 'Nino'; /* Simplified name */
    src: url('/fonts/nino.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Glaho'; /* Simplified name */
    src: url('/fonts/glaho.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    font-family: 'Chivo', 'Nino', 'Glaho', sans-serif; /* Corrected fallback */
  }
`;
