import { Header } from '../Header'
import { Background, Container, Content } from './style'

import { BiPlayCircle } from 'react-icons/bi'
export const Banner: React.FC = () => {
  return (
    <Container>
      <Background />
      <Header />
      <Content>
        <img src="/assets/quadro.png" alt="quadro" />
        <h1>Breno Correia</h1>
        <h2>Meio-campo armador, 17 anos</h2>
        <button>
          <BiPlayCircle className="icon" size="3.2rem" />
          Assistir highlights
        </button>
      </Content>
    </Container>
  )
}
