import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 416px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 44% 56%;

  margin-top: 50px;

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 340px;
  }

  .rec-dot {
    display: none;
  }

  .rec.rec-arrow {
    background: #333333 !important;

    position: absolute;
    top: 10px;
    right: 60px;

    width: 23px;
    height: 19px;

    border-radius: 0;

    font-size: 18px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 970px) {
      right: 20px;
    }

    @media (max-width: 400px) {
      right: 80px;
    }
  }

  .rec.rec-arrow-left {
    right: 120px;

    @media (max-width: 970px) {
      right: 80px;
    }

    @media (max-width: 400px) {
      right: 140px;
    }
  }

  .rec.rec-arrow:hover,
  .rec.rec-arrow-left:hover {
    filter: brightness(0.8);
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

    @media (max-width: 1345px) {
      width: 370px;
    }

    @media (max-width: 970px) {
      width: 280px;
      font-size: 20px;
      padding: 6px 0 0 0;
    }

    @media (max-width: 435px) {
      margin-left: 30px;
    }

    @media (max-width: 400px) {
      width: 230px;
      margin-left: 80px;
    }
  }
`

export const IndividualAwardsWrapper = styled.div`
  position: relative;

  min-width: 640px;

  @media (max-width: 1345px) {
    min-width: 500px;
  }

  @media (max-width: 1052px) {
    min-width: 460px;
  }

  @media (max-width: 550px) {
    min-width: 440px;
  }

  @media (max-width: 380px) {
    min-width: 380px;
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

  @media (max-width: 410px) {
    img {
      width: 111px;
      height: 128px;
    }
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

  @media (max-width: 380px) {
    span {
      font-size: 10px;
    }
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
    margin-top: -6px;
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
