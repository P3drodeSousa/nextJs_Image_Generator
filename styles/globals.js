import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *:before, *after{
  margin : 0;
  padding: 0;
  box-sizing: border-box;
 }

  body {
    margin: 0;
    padding: 0; 
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyle;
