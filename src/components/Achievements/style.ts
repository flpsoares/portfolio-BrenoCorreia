import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 416px;
  background: #ffffff;

  display: grid;
  grid-template-columns: 44% 56%;
`
export const IndividualAwards = styled.div`
  padding: 50px 0 50px 50px;

  display: flex;
  justify-content: flex-end;

  h1 {
    font-weight: 600;
    font-style: normal;
    font-size: 26px;
    color: #c1c1c1;
    text-align: start;
    padding: 0 50px;
  }
`

export const IndividualAwardsWrapper = styled.div`
  position: relative;

  width: 640px;
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

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
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
`
