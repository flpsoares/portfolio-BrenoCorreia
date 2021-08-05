import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  overflow: hidden;

  box-shadow: 0px -25px 50px 16px var(--dark);

  .bola {
    position: absolute;
    opacity: 4%;
    top: -120px;
    right: 0;
  }
`

export const KnowMoreButton = styled.button`
  margin: auto;

  display: flex;
  align-items: center;
  color: #a0a0a0;
  font-weight: 500;
  font-size: 14px;

  .icon {
    fill: #a0a0a0;
  }
`

export const Info = styled.div`
  margin: 100px 0 0 300px;

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
`
