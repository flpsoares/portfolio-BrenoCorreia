import styled from 'styled-components'

interface ButtonProps {
  isPrimary?: boolean
}

export const Container = styled.div`
  height: 720px;

  position: relative;

  @media (max-width: 810px) {
    height: 1000px;
  }
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

  @media (max-width: 1230px) {
    flex-direction: column;
    padding: 0;
  }
`

export const Title = styled.h1`
  transform: rotate(270deg);
  font-weight: 700;
  font-size: 75px;
  color: #a0a0a0;

  @media (max-width: 1230px) {
    transform: rotate(0);
    margin: 40px 0;
  }

  @media (max-width: 500px) {
    font-size: 55px;
  }

  @media (max-width: 360px) {
    font-size: 45px;
  }
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

  @media (max-width: 1590px) {
    margin-right: 200px;
  }

  @media (max-width: 1380px) {
    .gif1,
    .gif4 {
      width: 228px;
      height: 425px;
      object-fit: cover;
    }

    .gif2,
    .gif3 {
      width: 387px;
      height: 204px;
      object-fit: cover;
    }
  }

  @media (max-width: 1230px) {
    margin-right: 0;
  }

  @media (max-width: 900px) {
    .gif1,
    .gif4 {
      width: 188px;
      height: 385px;
      object-fit: cover;
    }

    .gif2,
    .gif3 {
      width: 347px;
      height: 176px;
      object-fit: cover;
    }
  }

  @media (max-width: 810px) {
    flex-direction: column;

    .gif1,
    .gif4 {
      width: 347px;
      height: 176px;
      object-fit: cover;
    }

    .gif2,
    .gif3 {
      width: 347px;
      height: 176px;
      object-fit: cover;
    }
  }

  @media (max-width: 360px) {
    .gif1,
    .gif4 {
      width: 307px;
      height: 176px;
      object-fit: cover;
    }

    .gif2,
    .gif3 {
      width: 307px;
      height: 176px;
      object-fit: cover;
    }
  }
`

export const Gif = styled.div`
  position: relative;

  &:hover .thumb {
    display: none;
  }

  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;

    top: 0;
    left: 0;
  }
`

export const ButtonPlay = styled.button<ButtonProps>`
  position: absolute;

  z-index: 2;

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

  @media (max-width: 1380px) {
    bottom: ${(props) => (props.isPrimary ? '35%' : '10px')};
  }

  @media (max-width: 900px) {
    bottom: ${(props) => (props.isPrimary ? '32%' : '10px')};
  }

  @media (max-width: 810px) {
    bottom: ${(props) => (props.isPrimary ? '15%' : '10px')};
    width: ${(props) => (props.isPrimary ? '61px' : '35px')};
    height: ${(props) => (props.isPrimary ? '61px' : '35px')};
  }
`

export const MiddleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 810px) {
    gap: 24px;
  }
`
