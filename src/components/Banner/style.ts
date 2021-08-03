import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 650px;

  padding: 0 300px;

  border: 1px solid var(--primary);
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
