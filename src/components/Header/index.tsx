import { Container, Item, Menu } from './style'

export const Header: React.FC = () => {
  return (
    <Container>
      <img src="/assets/logo.png" />
      <Menu>
        <ul>
          <Item>
            <a href="#">História</a>
          </Item>
          <Item>
            <a href="#">Títulos</a>
          </Item>
          <Item>
            <a href="#">Galeria</a>
          </Item>
          <Item>
            <a href="#">Contato</a>
          </Item>
        </ul>
      </Menu>
    </Container>
  )
}
