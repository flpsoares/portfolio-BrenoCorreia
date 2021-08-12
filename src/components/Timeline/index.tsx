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
  Background,
  AwardWrapperTitle,
  AwardTitle,
  AwardSubTitle
} from './style'
import { YearButton } from '../YearButton'

import { useContext } from 'react'
import { DatesContext } from '../../contexts/DatesContext'

import { BiTrophy } from 'react-icons/bi'
import { RiMedal2Line } from 'react-icons/ri'

import Carousel from 'react-elastic-carousel'
import { Arrow } from '../Arrow'

export const Timeline: React.FC = () => {
  const { dates } = useContext(DatesContext)

  const breakPoints = [
    { width: 107, itemsToShow: 1 },
    { width: 321, itemsToShow: 2 },
    { width: 428, itemsToShow: 3 },
    { width: 535, itemsToShow: 4 },
    { width: 652, itemsToShow: 5 },
    { width: 759, itemsToShow: 6 }
  ]

  return (
    <Container className="titles">
      <Background />
      <Dates>
        <Carousel
          renderArrow={Arrow}
          isRTL={false}
          itemsToShow={6}
          pagination={false}
          breakPoints={breakPoints}
        >
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
        </Carousel>
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
              <AwardWrapperTitle>Títulos</AwardWrapperTitle>
              <div>
                <Award>
                  <BiTrophy size={56} />
                  <AwardTitle>Paulista</AwardTitle>
                  <AwardSubTitle>sub 17</AwardSubTitle>
                </Award>
                <Award>
                  <BiTrophy size={56} />
                  <AwardTitle>Brasileiro</AwardTitle>
                  <AwardSubTitle>sub 17</AwardSubTitle>
                </Award>
              </div>
            </AwardsWrapper>

            <AwardsWrapper>
              <AwardWrapperTitle>Prêmios</AwardWrapperTitle>
              <div>
                <Award>
                  <RiMedal2Line size={56} />
                  <AwardTitle>Artilheiro Paulistão</AwardTitle>
                  <AwardSubTitle>sub 17</AwardSubTitle>
                </Award>
                <Award>
                  <RiMedal2Line size={56} />
                  <AwardTitle>Artilheiro Brasileiro</AwardTitle>
                  <AwardSubTitle>sub 17</AwardSubTitle>
                </Award>
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
