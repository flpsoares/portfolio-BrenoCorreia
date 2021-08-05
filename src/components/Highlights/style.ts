import styled from 'styled-components'

export const Container = styled.div`
  height: 720px;

  position: relative;
`

export const Background = styled.div`
  background-image: url('/assets/highlight-campo.png');
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 4%;

  position: absolute;

  width: 100%;
  height: 100%;

  z-index: -1;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px;
`

export const Title = styled.h1`
  transform: rotate(270deg);
  font-weight: 700;
  font-size: 75px;
  color: #a0a0a0;
`

export const Gifs = styled.div`
  display: flex;
  gap: 40px;

  .gif1,
  .gif4 {
    width: 308px;
    height: 525px;
    object-fit: cover;
  }

  .gif2,
  .gif3 {
    width: 427px;
    height: 244px;
    object-fit: cover;
  }
`

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 427px;
`
