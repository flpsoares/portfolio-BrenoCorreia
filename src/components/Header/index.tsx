import { Container, Item, Menu } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <img src="/assets/logo.png" />
      <Menu>
        <ul>
          <Item>
            <a href="#">HISTÓRIA</a>
          </Item>
          <Item>
            <a href="#">TÍTULOS</a>
          </Item>
          <Item>
            <a href="#">GALERIA</a>
          </Item>
          <Item>
            <a href="#">CONTATO</a>
          </Item>
        </ul>
      </Menu>
    </Container>
  )
}
