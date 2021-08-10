import styled from 'styled-components'

export const Container = styled.div`
  min-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;

  h1 {
    font-weight: 700;
    font-size: 75px;
    color: #a0a0a0;
    text-align: center;
    padding: 58px 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  padding: 0 58px;

  margin-bottom: 58px;
  overflow-x: scroll;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::-webkit-scrollbar {
    height: 16px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 10px;
    &:hover {
      background: rgba(244, 112, 76, 0.7);
    }
  }
`

export const DoubleColumn = styled.div`
  min-width: 380px;
  max-width: 380px;
  height: 760px;
  display: grid;
  gap: 14px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  img {
    min-height: 177px;
  }
`

export const SingleColumn = styled.div`
  min-width: 190px;
  min-height: 760px;
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
`

export const FirstColumn = styled(DoubleColumn)`
  grid-template-areas:
    'f1 f1'
    'f1 f1'
    'f2 f3'
    'f2 f4';
`

export const SecondColumn = styled(DoubleColumn)`
  grid-template-areas:
    'f1 f1'
    'f2 f2'
    'f3 f3'
    'f3 f3';
`

export const ThirdColumn = styled(SingleColumn)`
  grid-template-areas:
    'f1'
    'f2'
    'f2'
    'f3';
`

export const FourthColumn = styled(DoubleColumn)`
  grid-template-areas:
    'f1 f2'
    'f1 f3'
    'f4 f4'
    'f4 f4';
`

export const FifthColumn = styled(DoubleColumn)`
  grid-template-areas:
    'f1 f1'
    'f2 f2'
    'f3 f3'
    'f3 f3';
`

export const SixthColumn = styled(SingleColumn)`
  grid-template-areas:
    'f1'
    'f2'
    'f2'
    'f3';
`
