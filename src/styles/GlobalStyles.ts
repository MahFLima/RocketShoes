import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
  --button: #FF0000;
  --main-background:  #C4C4C4;
  --background: #E5E5E5;
  --text: #000;
  --footer: #000;
  --text-description: #9C9696;
  }

  body{
  font-family: Roboto, sans-serif;
  color: var(--text);
  }
`