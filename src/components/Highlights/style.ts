import styled from 'styled-components'

interface ButtonProps {
  isPrimary?: boolean
}

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
  gap: 24px;

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

export const Gif = styled.div`
  position: relative;

  .thumbnail2,
  .thumbnail3 {
    width: 427px;
    height: 244px;
    object-fit: cover;
  }

  .thumbnail4 {
    width: 308px;
    height: 525px;
    object-fit: cover;
  }
`

export const ButtonPlay = styled.button<ButtonProps>`
  position: absolute;

  left: ${(props) => (props.isPrimary ? '50%' : '90%')};
  bottom: ${(props) => (props.isPrimary ? '40%' : '10px')};

  transform: translateX(-50%) translateY(-50%);

  width: ${(props) => (props.isPrimary ? '71px' : '35px')};
  height: ${(props) => (props.isPrimary ? '71px' : '35px')};

  background: ${(props) =>
    props.isPrimary ? 'var(--primary)' : 'rgba(0, 0, 0, 0.6)'};
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background 0.1s;

  &:hover {
    background: var(--primary);
  }
`

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 427px;
`
