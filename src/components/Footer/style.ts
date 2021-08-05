import styled from 'styled-components'

export const Container = styled.div`
  background: rgba(13, 13, 13, 1);

  width: 100%;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 32px;

  .logo {
    width: 71px;
    height: 52px;
    margin-right: 58px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;
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
`

export const Sponsorship = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 14px;
    font-weight: 700;
    color: #555555;
  }

  div {
    display: flex;
    gap: 28px;
  }

  .nike {
    width: 63px;
    height: 33px;
  }

  .sportsbet {
    width: 133px;
    height: 27px;
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
