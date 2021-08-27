import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  width: 1150px;

  padding: 26px 0;

  img {
    width: 71px;
    height: 52px;
    @media (max-width: 1090px) {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 1350px) {
    width: 800px;
  }

  @media (max-width: 1000px) {
    width: 600px;
  }

  @media (max-width: 660px) {
    flex-direction: column;
  }
`

export const Menu = styled.nav`
  ul {
    display: flex;
    gap: 50px;
    font-size: 12px;

    @media screen and (max-width: 670px) {
      margin-right: 0px;
    }

    @media screen and (max-width: 360px) {
      gap: 30px;
    }
  }
`

export const Item = styled.li`
  a {
    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans', sans-serif;
    font-weight: 600;

    transition: color 0.2s;
    cursor: pointer;

    &:hover {
      color: var(--primary);
    }
  }
`
