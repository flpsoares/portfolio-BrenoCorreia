import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 0 326px;

  @media (max-width: 660px) {
    padding: 0;
  }
`

export const Background = styled.div`
  position: absolute;

  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: url('/assets/banner-campo.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center bottom;
  filter: brightness(0.3);
`

export const Content = styled.div`
  margin-top: 50px;
  margin-bottom: 40px;
  height: 44rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 1150px;

  position: relative;

  padding-left: 54px;

  img {
    height: 100%;
    position: absolute;
    left: 0;
    z-index: -1;
  }

  h1 {
    font-size: 10rem;
    color: #ffffff;
    font-weight: 600;
  }

  h2 {
    font-size: 3.2rem;
    font-weight: 500;
  }

  button {
    margin-top: 40px;
    font-weight: 400;
    font-size: 2.4rem;
    color: var(--primary);

    display: flex;
    align-items: center;
    gap: 10px;

    transition: filter 0.2s;

    @media (max-width: 1420px) {
      margin-top: 30px;
    }

    @media (max-width: 1280px) {
      margin-top: 20px;
    }

    @media (max-width: 1050px) {
      margin-top: 10px;
    }

    @media (max-width: 630px) {
      font-size: 16px;
    }

    .icon {
      fill: var(--primary);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (max-width: 1350px) {
    width: 800px;
  }

  @media (max-width: 1000px) {
    width: 600px;

    h1 {
      font-size: 7rem;
    }

    h2 {
      font-size: 2.8rem;
    }
  }

  @media (max-width: 630px) {
    left: 200px;
    padding-left: 24px;

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    img {
      height: 70%;
    }
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 3.3rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    img {
      height: 60%;
    }
  }
`
