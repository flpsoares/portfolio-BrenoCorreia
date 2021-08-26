import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 416px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 44% 56%;

  margin-top: 50px;

  @media (max-width: 970px) {
    /* display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 340px; */
  }
`

export const PlayerNumbers = styled.div`
  background: var(--primary);
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  padding: 50px;
  width: 100vw;

  max-height: 416px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  h1 {
    font-size: 32px;
  }

  p {
    font-size: 16px;
  }

  @media (max-width: 1300px) {
    justify-content: center;
    padding: 50px 0px;

    h1 {
      font-size: 26px;
    }

    p {
      font-size: 12px;
    }
  }

  @media (max-width: 600px) {
    clip-path: none;
  }

  @media (max-width: 350px) {
    h1 {
      font-size: 22px;
    }
  }
`

export const PlayerNumbersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 200px);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 50px;
  row-gap: 60px;

  div {
    text-align: center;
  }

  p {
    font-weight: 500;
  }

  @media (max-width: 410px) {
    column-gap: 10px;

    h1 {
      font-size: 20px;
    }
  }
`
