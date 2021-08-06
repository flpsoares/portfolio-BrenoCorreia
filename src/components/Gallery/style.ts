import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 1000px;
  overflow-x: scroll;
`

export const Title = styled.h1`
  font-weight: 700;
  font-size: 75px;
  color: #a0a0a0;
  line-height: 66px;
  text-align: center;

  padding: 80px 0;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 16px;

  min-width: 2000px;

  margin-bottom: 50px;

  padding: 0 14px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .twoDiagonalSpaces {
    grid-column: span 2;
  }

  .twoVerticalSpaces {
    grid-row: span 2;
  }

  .fourSpaces {
    grid-column: span 2;
    grid-row: span 2;
  }
`

export const SingleColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  width: 9%;
  height: 100%;
  border: 1px solid green;
`

export const DoubleColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 19%;
  height: 100%;
  border: 1px solid red;
`
