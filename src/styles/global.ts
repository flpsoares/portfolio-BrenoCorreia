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
