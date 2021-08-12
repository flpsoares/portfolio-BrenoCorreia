import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
  }

  body {
    background: var(--dark);
  }
  
  html {
    font-size: 62.5%;
  }

  @media (max-width: 1420px) {
    html {
      font-size: 50%;
    }
  }

  @media (max-width: 1280px) {
    html {
      font-size: 40%;
    }
  }

  @media (max-width: 1165px) {
    html {
      font-size: 30%;
    }
  }

  @media (max-width: 1050px) {
    html {
      font-size: 20%;
    }
  }

  a {
    color: #FFFFFF;
    text-decoration: none
  }

  ul {
    list-style: none;
  }
  
  button, input {
    background: 0;
    border: 0;
  }
  
  button {
    cursor: pointer;
  }

  :root {
    --primary: #F4704C;
    --dark: #222222;
  }

  
`
