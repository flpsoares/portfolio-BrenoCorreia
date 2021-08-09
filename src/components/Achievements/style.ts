import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 416px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 44% 56%;

  margin-top: 50px;
  margin-bottom: 400px;

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
export const IndividualAwards = styled.div`
  padding: 50px 0;

  display: flex;
  justify-content: flex-end;

  h1 {
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    color: #c1c1c1;
    text-align: start;
    padding: 0 50px;

    width: 460px;

    @media (max-width: 1440px) {
      width: 450px;
    }

    @media (max-width: 1320px) {
      width: 370px;
    }

    @media (max-width: 970px) {
      width: 350px;
    }

    @media (max-width: 370px) {
      margin-left: 30px;
    }
  }
`

export const IndividualAwardsWrapper = styled.div`
  position: relative;

  min-width: 640px;

  @media (max-width: 1460px) {
    min-width: 580px;
  }

  @media (max-width: 1225px) {
    min-width: 500px;
  }

  @media (max-width: 1052px) {
    min-width: 460px;
  }
`

export const Award = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-top: 32px;

  span {
    color: var(--primary);
    font-size: 12px;
    font-weight: 600;
  }

  img {
    width: 131px;
    height: 148px;
  }
`

export const AwardTitle = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
    font-style: normal;
    font-size: 14px;
    color: #555555;
    text-align: center;
  }
`

export const PlayerNumbers = styled.div`
  background: var(--primary);
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
  padding: 50px;

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

  @media (max-width: 970px) {
    clip-path: none;
    width: 100%;
    margin-top: -34px;
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
