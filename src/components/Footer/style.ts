import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(13, 13, 13, 1);

  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 32px 200px;

  @media (max-width: 875px) {
    padding: 32px 60px;
  }

  @media (max-width: 540px) {
    padding: 32px 8px;
  }

  @media (max-width: 440px) {
    height: 240px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  .logo {
    width: 71px;
    height: 52px;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 32px;
  }
`

export const Advice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  p:nth-child(1) {
    font-size: 14px;
    font-weight: 700;
    color: #555555;
  }

  p:nth-child(2) {
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 440px) {
    text-align: center;
  }
`
export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;

  a {
    &:hover {
      .icon {
        fill: var(--primary);
      }
    }
  }
`
