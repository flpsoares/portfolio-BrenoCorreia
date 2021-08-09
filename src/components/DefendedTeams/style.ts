import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #a0a0a0;
    font-size: 32px;
  }

  @media (max-width: 720px) {
    h1 {
      font-size: 22px;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 28px;
  padding: 32px;

  @media (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Team = styled.div`
  div {
    background: #ffffff;
    width: 137px;
    height: 142px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      height: 120px;
      object-fit: contain;
    }
  }

  p {
    font-weight: 600;
    text-align: center;
    padding: 12px;
    font-size: 18px;
  }

  @media (max-width: 720px) {
    div {
      width: 117px;
      height: 122px;

      img {
        height: 80px;
      }
    }
  }
`
