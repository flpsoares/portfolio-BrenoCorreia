import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  .rec-dot {
    background-color: 0 !important;
    opacity: 50% !important;
    border-width: 0 !important;
    outline: 0 !important;
  }
  .rec-dot_active {
    background-color: 0 !important;
    opacity: 100% !important;
    outline: 0 !important;
    border-width: 0 !important;
  }
  .rec.rec-arrow {
    background: 0 !important;
    font-size: 30px;
    color: #a0a0a0;
    border-width: 0 !important;
    outline: 0 !important;
  }
  .rec-item-wrapper {
    height: 100%;
  }
  .rec.rec-arrow:hover {
    background: 0 !important;
    color: white !important;
  }
  .rec.rec-arrow:disabled {
    display: none;
  }

  @media (max-width: 1040px) {
    margin-bottom: 100px;
  }

  @media (max-width: 1100px) {
    margin-bottom: 140px;
  }

  @media (max-width: 720px) {
    margin-bottom: 180px;
  }
`

export const Background = styled.div`
  background-image: url('/assets/campo.png');
  background-position: top;
  opacity: 10%;

  box-shadow: inset 0px -50px 300px 15px var(--dark),
    inset 0px 50px 1000px 15px var(--dark);

  position: absolute;
  top: 100px;

  width: 100%;
  height: 100%;

  z-index: -1;
`

export const Dates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 120px;

  min-width: 80%;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px;
  height: 800px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    place-items: center;
  }

  @media (max-width: 700px) {
    padding: 60px 0;
  }
`

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  img {
    width: 300px;
    height: 550px;
    object-fit: cover;
    border-radius: 16px;
  }

  @media (max-width: 1620px) {
    img {
      width: 260px;
    }
  }

  @media (max-width: 1440px) {
    img {
      width: 220px;
      height: 480px;
    }
  }

  @media (max-width: 1235px) {
    img {
      width: 180px;
      height: 420px;
    }
  }

  @media (max-width: 590px) {
    img {
      width: 120px;
      height: 260px;
    }
  }

  @media (max-width: 450px) {
    img {
      width: 90px;
      height: 200px;
    }
  }
`
export const Infos = styled.div`
  padding: 0 40px;

  h1 {
    font-size: 3.2rem;
  }

  @media (max-width: 1280px) {
    font-size: 2rem;
  }

  @media (max-width: 1100px) {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 1165px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 13px;
    }
  }
`

export const Quote = styled.span`
  color: var(--primary);
  font-size: 50px;

  @media (max-width: 1040px) {
    font-size: 36px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
  }
`

export const InfosWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 540px) {
    gap: 22px;
  }
`

export const AwardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  div {
    display: flex;
    gap: 14px;
  }
`

export const AwardWrapperTitle = styled.p`
  color: var(--primary);
  font-weight: 500;
  font-size: 20px;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`

export const Award = styled.div`
  width: 125px;
  height: 152px;
  background-color: var(--primary);
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 16px;
  text-align: center;

  @media (max-width: 1620px) {
    width: 110px;
  }

  @media (max-width: 540px) {
    width: 70px;
    height: 110px;
  }
`

export const AwardTitle = styled.p`
  font-weight: 500;
  font-size: 18px;

  @media (max-width: 540px) {
    font-size: 12px;
  }
`
export const AwardSubTitle = styled.p`
  font-weight: 200;
  font-size: 14px;

  @media (max-width: 540px) {
    font-size: 11px;
  }
`

export const Description = styled.div`
  margin-top: 24px;

  p {
    color: var(--primary);
    font-weight: 500;
    font-size: 20px;
  }
  span {
    font-style: normal;
    font-size: 16px;
    line-height: 31px;
  }

  @media (max-width: 540px) {
    max-width: 240px;

    p {
      font-size: 16px;
    }

    span {
      font-size: 13px;
    }
  }
`
