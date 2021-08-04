import { Container, Team, Wrapper } from './style'

export const DefendedTeams: React.FC = () => {
  return (
    <Container>
      <h1>TIMES DEFENDIDOS</h1>
      <Wrapper>
        <Team>
          <div>
            <img src="/assets/teams/vasco.png" alt="vasco" />
          </div>
          <p>2018 - 2021</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/palmeiras.png" alt="palmeiras" />
          </div>
          <p>2017</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/escudos.png" alt="escudos" />
          </div>
          <p>2016 - 2013</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/galaxy.png" alt="galaxy" />
          </div>
          <p>2013 - 2009</p>
        </Team>
      </Wrapper>
    </Container>
  )
}
