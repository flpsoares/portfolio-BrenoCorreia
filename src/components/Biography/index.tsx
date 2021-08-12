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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
            bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
            justo
          </span>
        </Info>
      </Wrapper>
      <Timeline />
      <DefendedTeams />
    </Container>
  )
}
