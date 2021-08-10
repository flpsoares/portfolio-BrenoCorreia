import { useState } from 'react'
import {
  Container,
  Title,
  Gifs,
  Wrapper,
  MiddleDiv,
  Background,
  Gif,
  ButtonPlay
} from './style'

import { BsFillPlayFill } from 'react-icons/bs'

export const Highlights: React.FC = () => {
  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>HIGHLIGHTS</Title>
        <Gifs>
          <Gif>
            <ButtonPlay isPrimary>
              <BsFillPlayFill size={42} />
            </ButtonPlay>
            <img src="/assets/highlights/gif1.gif" alt="gif1" className="gif1" />
          </Gif>
          <MiddleDiv>
            <Gif>
              <ButtonPlay>
                <BsFillPlayFill size={22} />
              </ButtonPlay>
              <img src="/assets/highlights/gif2.gif" alt="gif2" className="gif2" />
              <img className="thumbnail thumb" src="/assets/highlights/thumb2.png" />
            </Gif>

            <Gif>
              <ButtonPlay>
                <BsFillPlayFill size={22} />
              </ButtonPlay>
              <img src="/assets/highlights/gif3.gif" alt="gif3" className="gif3" />
              <img className="thumbnail thumb" src="/assets/highlights/thumb3.png" />
            </Gif>
          </MiddleDiv>
          <Gif>
            <ButtonPlay>
              <BsFillPlayFill size={22} />
            </ButtonPlay>
            <img src="/assets/highlights/gif4.gif" alt="gif4" className="gif4" />
            <img className="thumbnail thumb" src="/assets/highlights/thumb4.png" />
          </Gif>
        </Gifs>
      </Wrapper>
    </Container>
  )
}
