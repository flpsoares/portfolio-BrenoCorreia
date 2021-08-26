import { Container, Team, Wrapper } from './style'

export const DefendedTeams: React.FC = () => {
  return (
    <Container>
      <h1>TIMES DEFENDIDOS</h1>
      <Wrapper>
        <Team>
          <div>
            <img src="/assets/teams/nacional.png" alt="nacional" />
          </div>
          <p>atual</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/vasco.png" alt="vasco" />
          </div>
          <p>2021 - 2019</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/nacional.png" alt="nacional" />
          </div>
          <p>2019</p>
        </Team>
        <Team>
          <div>
            <img src="/assets/teams/sao_paulo.png" alt="sao_paulo" />
          </div>
          <p>2017 - 2012</p>
        </Team>
      </Wrapper>
    </Container>
  )
}
