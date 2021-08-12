import { Container, Info, Wrapper, KnowMoreButton } from './style'

import { MdKeyboardArrowDown } from 'react-icons/md'
import { Timeline } from '../Timeline'
import { DefendedTeams } from '../DefendedTeams'

import { Link } from 'react-scroll'

export const Biography: React.FC = () => {
  return (
    <Container className="history">
      <KnowMoreButton>
        <Link
          activeClass="active"
          to="history"
          spy={true}
          smooth={true}
          duration={500}
        >
          <MdKeyboardArrowDown className="icon" size={26} />
          conheça mais
        </Link>
      </KnowMoreButton>
      <img className="bola" src="/assets/bola.gif" alt="bola" />
      <Wrapper>
        <Info>
          <h1>BIOGRAFIA</h1>
          <span>
            Com seus primeiros passos na base do São Paulo FC onde chegou com 10 anos
            e ficou até os 15 ganhando títulos pelo clube tanto no campo quanto no
            futsal, posteriormente profissionalizado pelo Nacional AC e emprestado ao
            Vasco da Gama onde se sagrou campeão carioca e campeão da copa do Brasil.
          </span>
        </Info>
      </Wrapper>
      <Timeline />
      <DefendedTeams />
    </Container>
  )
}
