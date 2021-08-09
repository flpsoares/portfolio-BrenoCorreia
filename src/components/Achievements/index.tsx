import {
  Container,
  IndividualAwards,
  Award,
  PlayerNumbers,
  PlayerNumbersWrapper,
  AwardTitle,
  IndividualAwardsWrapper
} from './style'

import Carousel from 'react-elastic-carousel'

export const Achievements: React.FC = () => {
  const breakPoints = [
    { width: 1700, itemsToShow: 3 },
    { width: 410, itemsToShow: 2 }
  ]

  return (
    <Container>
      <IndividualAwards>
        <IndividualAwardsWrapper>
          <h1>PRÊMIOS INDIVIDUAIS (18)</h1>
          <Carousel breakPoints={breakPoints} itemsToShow={3} isRTL={false}>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
            <Award>
              <img src="/assets/chuteira.png" alt="chuteira" />
              <AwardTitle>
                <span>Artilheiro</span>
                <span>Brasileirão 2018</span>
              </AwardTitle>
              <span>sub 17</span>
            </Award>
          </Carousel>
        </IndividualAwardsWrapper>
      </IndividualAwards>
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
