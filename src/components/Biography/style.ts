import styled, { keyframes } from 'styled-components'

const bouncing = keyframes`
  0% {
    transform: translateY(-2px);
  }

  50% {
    transform: translateY(2px);
  }
 
  100% {
    transform: translateY(-2px);
  }
`

export const Container = styled.div`
  position: relative;

  overflow: hidden;

  box-shadow: 0px -25px 50px 16px var(--dark);

  a:nth-child(1) {
    margin: auto;

    display: flex;
    align-items: center;
    color: #a0a0a0;
    font-weight: 500;
    font-size: 14px;

    cursor: pointer;

    transition: transform 0.05s;
    animation: ${bouncing} 1s;

    animation-iteration-count: infinite;

    .icon {
      fill: #a0a0a0;
    }
  }

  .bola {
    position: absolute;
    opacity: 4%;
    top: -120px;
    right: 0;

    z-index: -1;

    @media (max-width: 1400px) {
      width: 500px;
    }

    @media (max-width: 1230px) {
      width: 400px;
    }

    @media (max-width: 440px) {
      width: 300px;
    }
  }

  @media (max-width: 1050px) {
    box-shadow: 0px 0px 50px 16px var(--dark);
  }
`

export const KnowMoreButton = styled.div`
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  padding: 100px 320px;

  display: flex;

  @media screen and (max-width: 1400px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 645px) {
    padding: 100px 180px;
  }

  @media (max-width: 350px) {
    padding: 100px 120px;
  }
`

export const Info = styled.div`
  width: 640px;

  h1 {
    font-size: 65px;
    color: #a0a0a0;
    line-height: 90px;
  }

  span {
    color: #a0a0a0;
    font-size: 22px;
    line-height: 36px;
    margin-top: 20px;
  }

  @media (max-width: 440px) {
    h1 {
      font-size: 40px;
    }
  }
`
