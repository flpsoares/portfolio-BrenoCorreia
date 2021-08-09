import {
  Award,
  AwardsWrapper,
  Container,
  Dates,
  Infos,
  Quote,
  InfosWrapper,
  Photos,
  Wrapper,
  Description,
  Background
} from './style'
import { YearButton } from '../YearButton'

import { useContext } from 'react'
import { DatesContext } from '../../contexts/DatesContext'

export const Timeline: React.FC = () => {
  const { dates } = useContext(DatesContext)

  return (
    <Container>
      <Background />
      <Dates>
        {dates?.map((data) => {
          return (
            <YearButton
              key={data.id}
              id={data.id}
              date={data.date}
              team={data.team}
              isActive={data.isActive}
            />
          )
        })}
      </Dates>
      <Wrapper>
        <Photos>
          <img src="/assets/galery/foto20.jpg" />
          <img src="/assets/galery/foto3.jpg" />
          <img src="/assets/galery/foto17.jpg" />
        </Photos>
        <Infos>
          <h1>
            <Quote>“</Quote> MEU MELHOR MOMENTO NA CARREIRA. <Quote>“</Quote>
          </h1>
          <InfosWrapper>
            <AwardsWrapper>
              <p>Títulos</p>
              <div>
                <Award></Award>
                <Award></Award>
              </div>
            </AwardsWrapper>

            <AwardsWrapper>
              <p>Prêmios</p>
              <div>
                <Award></Award>
                <Award></Award>
              </div>
            </AwardsWrapper>
          </InfosWrapper>
          <Description>
            <p>Descritivo</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
              bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et
              viverra justo commod oin sodales pulvinar tempor.
            </span>
          </Description>
        </Infos>
      </Wrapper>
    </Container>
  )
}
