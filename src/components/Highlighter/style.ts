import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  border-radius: 6px;

  margin: 0 auto 20px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  width: 69px;
  height: 72px;

  position: relative;

  div {
    background: #ffffff;
    width: 11px;
    height: 11px;

    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
  }

  img {
    width: 60%;
    position: relative;
    z-index: 3;
  }
`
