import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 26px 0;

  img {
    width: 71px;
    height: 52px;
  }
`

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    margin-right: 130px;
    font-size: 12px;
  }
`

export const Item = styled.li`
  a {
    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans', sans-serif;
    font-weight: 600;

    transition: color 0.2s;

    &:hover {
      color: var(--primary);
    }
  }
`
