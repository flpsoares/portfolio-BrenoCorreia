import styled from 'styled-components'

export const Container = styled.div``

export const Dates = styled.div`
  display: flex;
  justify-content: center;
  gap: 120px;

  margin-top: 200px;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px;
  background-image: url('/assets/campo.png');
  box-shadow: inset 5px -2px 400px 370px #222222;
  height: 800px;
`

export const Photos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;

  img {
    width: 300px;
    height: 550px;
    object-fit: cover;
    border-radius: 16px;
  }
`
export const Infos = styled.div`
  padding: 0 40px;
`

export const Quote = styled.span`
  color: var(--primary);
  font-size: 50px;
`

export const InfosWrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const AwardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  p {
    color: var(--primary);
    font-weight: 500;
  }
  div {
    display: flex;
    gap: 14px;
  }
`

export const Award = styled.div`
  width: 125px;
  height: 152px;
  background-color: var(--primary);
  border-radius: 8px;
`

export const Description = styled.div`
  margin-top: 24px;

  p {
    color: var(--primary);
    font-weight: 500;
  }
  span {
    font-style: normal;
    font-size: 16px;
    line-height: 31px;
  }
`
