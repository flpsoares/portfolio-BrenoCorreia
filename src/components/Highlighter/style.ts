import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 69px;
  height: 72px;

  top: -70px;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);

  position: absolute;

  div {
    background: #ffffff;
    width: 11px;
    height: 11px;

    z-index: -1;

    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(50deg);
  }

  img {
    width: 60%;
  }
`
