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

import { useContext, useEffect, useState } from 'react'
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

  const [date, setDate] = useState<App.Date>()

  useEffect(() => {
    dates?.forEach((date) => {
      if (date.isActive === true) {
        setDate(date)
      }
    })
  }, [dates])

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
          <img src={date?.imagem1} />
          <img src={date?.imagem2} />
          <img src={date?.imagem3} />
        </Photos>
        <Infos>
          <h1>
            <Quote>“ </Quote> {date?.title} <Quote> “</Quote>
          </h1>
          <InfosWrapper>
            <AwardsWrapper>
              <AwardWrapperTitle>Títulos</AwardWrapperTitle>
              <div>
                <Award>
                  <BiTrophy size={56} />
                  <AwardTitle>{date?.title1}</AwardTitle>
                  <AwardSubTitle>{date?.subTitle1}</AwardSubTitle>
                </Award>
                <Award>
                  <BiTrophy size={56} />
                  <AwardTitle>{date?.title2}</AwardTitle>
                  <AwardSubTitle>{date?.subTitle2}</AwardSubTitle>
                </Award>
              </div>
            </AwardsWrapper>

            <AwardsWrapper>
              <AwardWrapperTitle>Prêmios</AwardWrapperTitle>
              <div>
                <Award>
                  <RiMedal2Line size={56} />
                  <AwardTitle>{date?.award1}</AwardTitle>
                  <AwardSubTitle>{date?.subAward1}</AwardSubTitle>
                </Award>
                <Award>
                  <RiMedal2Line size={56} />
                  <AwardTitle>{date?.award2}</AwardTitle>
                  <AwardSubTitle>{date?.subAward2}</AwardSubTitle>
                </Award>
              </div>
            </AwardsWrapper>
          </InfosWrapper>
          <Description>
            <p>Descritivo</p>
            <span>{date?.description}</span>
          </Description>
        </Infos>
      </Wrapper>
    </Container>
  )
}
