import { Container, Wrapper, Advice, Social } from './style'

import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img className="logo" src="/assets/logo.png" alt="logo" />
        <Advice>
          <p>Assessoria</p>
          <p>contato@breno.com.br</p>
        </Advice>
        <Social>
          <a href="#">
            <AiOutlineInstagram className="icon" size={32} />
          </a>
          <a href="#">
            <ImFacebook className="icon" size={32} />
          </a>
          <a href="#">
            <AiFillYoutube className="icon" size={32} />
          </a>
        </Social>
      </Wrapper>
    </Container>
  )
}
