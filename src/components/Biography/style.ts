import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  position: relative;

  overflow: hidden;

  box-shadow: 0px -25px 50px 16px var(--dark);

  .bola {
    position: absolute;
    opacity: 4%;
    top: -120px;
    right: 0;

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

const bouncing = keyframes`
  from {
    transform: translateY(-2px);
  }
 
  to {
    transform: translateY(2px);
  }
`

export const KnowMoreButton = styled.button`
  margin: auto;

  display: flex;
  align-items: center;
  color: #a0a0a0;
  font-weight: 500;
  font-size: 14px;

  transition: transform 0.1s;
  animation: ${bouncing} 1s;

  animation-iteration-count: infinite;

  .icon {
    fill: #a0a0a0;
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
