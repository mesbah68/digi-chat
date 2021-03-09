import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: bold;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Black.woff2') format('woff2');
}
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: 600;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Bold.woff2') format('woff2');
}
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: 500;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Medium.woff2') format('woff2');
}
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: 300;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Light.woff2') format('woff2');
}
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: 200;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Light.woff2') format('woff2');
}
@font-face {
  font-family: Estedad;
  font-style: normal;
  font-weight: normal;
  font-display: auto;
  src: url('./fonts/woff2/Estedad-FD-Thin.woff2') format('woff2');
}

body, html {
  margin: 0;
  font-family: Estedad, tahoma;
  direction: rtl;
  text-align: right;
  min-height: 100vh;
  height: 100%;
}

  
`;