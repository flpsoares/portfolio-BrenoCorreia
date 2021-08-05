import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 650px;

  position: relative;

  padding: 0 300px;
`

export const Background = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  z-index: -1;

  background-image: url('/assets/banner-campo.gif');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -280px;
  filter: brightness(0.3);
`

export const Content = styled.div`
  margin-top: 50px;
  height: 440px;

  display: flex;
  align-items: center;

  position: relative;

  img {
    height: 100%;
    position: absolute;
  }
`

export const ContentWrapper = styled.div`
  margin-left: 60px;
  margin-bottom: 14px;

  z-index: 2;

  h1 {
    font-size: 100px;
    color: #ffffff;
    font-weight: 600;
  }

  h2 {
    font-size: 32px;
    font-weight: 500;
  }

  button {
    margin-top: 40px;
    font-weight: 400;
    font-size: 24px;
    color: var(--primary);

    display: flex;
    align-items: center;
    gap: 10px;

    transition: filter 0.2s;

    .icon {
      fill: var(--primary);
    }

    &:hover {
      filter: brightness(0.8);
    }
  }
`
