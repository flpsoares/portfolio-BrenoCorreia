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

  .rec-dot {
    display: none;
  }

  .rec.rec-arrow {
    background: #333333 !important;

    position: absolute;
    top: 10px;
    right: 60px;
    
    width: 23px;
    height: 19px;

    border-radius: 0;

    font-size: 18px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 970px) {
      right: 20px;
    }

    @media (max-width: 400px) {
      right: 80px;
    }
  }

  .rec.rec-arrow-left {
    right: 120px;

    @media (max-width: 970px) {
      right: 80px;
    }

    @media (max-width: 400px) {
      right: 140px;
    }
  }

  .rec.rec-arrow:hover, .rec.rec-arrow-left:hover {
    filter: brightness(0.8);
  }
`
