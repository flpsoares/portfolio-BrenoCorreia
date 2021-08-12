import styled from 'styled-components'

export const Container = styled.button<App.Date>`
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100%;

  h1 {
    font-size: 42px;
    font-weight: 600;

    margin-top: auto;

    color: ${(props) => (props.isActive ? 'var(--primary)' : '#a0a0a0')};

    &:hover {
      color: ${(props) => (props.isActive ? 'var(--primary)' : '#ffffff')};
    }
  }
`
