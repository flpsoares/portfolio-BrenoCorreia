import { Container, Wrapper, Advice, Sponsorship, Social } from './style'

import { AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { ImFacebook } from 'react-icons/im'

export const Footer: React.FC = () => {
  return (
    <Container>
      <img className="logo" src="/assets/logo.png" alt="logo" />
      <Wrapper>
        <Advice>
          <p>Assessoria</p>
          <p>contato@breno.com.br</p>
        </Advice>
        <Sponsorship>
          <p>Patrocínio</p>
          <div>
            <img className="nike" src="/assets/footer/nike.png" alt="nike" />
            <img
              className="sportsbet"
              src="/assets/footer/sportsbet.png"
              alt="sportsbet"
            />
          </div>
        </Sponsorship>
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
