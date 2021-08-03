import { Header } from '../Header'
import { Container, Content, ContentWrapper } from './style'

import { BiPlayCircle } from 'react-icons/bi'
export const Banner: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <img src="/assets/quadro.png" alt="quadro" />
        <ContentWrapper>
          <h1>Breno Correia</h1>
          <h2>Meio-campo armador, 17 anos</h2>
          <button>
            <BiPlayCircle className="icon" size={32} />
            Assistir highlights
          </button>
        </ContentWrapper>
      </Content>
    </Container>
  )
}
