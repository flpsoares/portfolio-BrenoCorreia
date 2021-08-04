import styled from 'styled-components'

export const Container = styled.button<App.Date>`
  font-size: 42px;
  color: ${(props) => (props.isActive ? 'var(--primary)' : '#a0a0a0')};
  font-weight: 600;

  position: relative;

  &:hover {
    color: ${(props) => (props.isActive ? 'var(--primary)' : '#ffffff')};
  }
`
