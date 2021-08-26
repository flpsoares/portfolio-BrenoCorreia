import { Container, PlayerNumbers, PlayerNumbersWrapper } from './style'
export const Achievements: React.FC = () => {
  return (
    <Container>
      <PlayerNumbers>
        <h1>NÚMEROS DO JOGADOR</h1>
        <PlayerNumbersWrapper>
          <div>
            <h1>13 anos</h1>
            <p>De carreira</p>
          </div>
          <div>
            <h1>78</h1>
            <p>Gols oficiais</p>
          </div>
          <div>
            <h1>11 títulos</h1>
            <p>Conquistados</p>
          </div>
          <div>
            <h1>17 prêmios</h1>
            <p>Individuais</p>
          </div>
        </PlayerNumbersWrapper>
      </PlayerNumbers>
    </Container>
  )
}
