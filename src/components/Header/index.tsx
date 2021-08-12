import { Container, Item, Menu } from './style'

import { Link } from 'react-scroll'

export const Header: React.FC = () => {
  return (
    <Container>
      <img src="/assets/logo.png" />
      <Menu>
        <ul>
          <Item>
            <Link
              activeClass="active"
              to="history"
              spy={true}
              smooth={true}
              duration={500}
            >
              HISTÓRIA
            </Link>
          </Item>
          <Item>
            <Link
              activeClass="active"
              to="titles"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              TÍTULOS
            </Link>
          </Item>
          <Item>
            <Link
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={180}
              duration={500}
            >
              GALERIA
            </Link>
          </Item>
          <Item>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              CONTATO
            </Link>
          </Item>
        </ul>
      </Menu>
    </Container>
  )
}
