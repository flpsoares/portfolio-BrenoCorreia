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
  const [enableGif2, setEnableGif2] = useState(false)
  const [enableGif3, setEnableGif3] = useState(false)
  const [enableGif4, setEnableGif4] = useState(false)

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
            <Gif
              onMouseEnter={() => setEnableGif2(true)}
              onMouseLeave={() => setEnableGif2(false)}
            >
              <ButtonPlay>
                <BsFillPlayFill size={22} />
              </ButtonPlay>
              {enableGif2 ? (
                <img src="/assets/highlights/gif2.gif" alt="gif2" className="gif2" />
              ) : (
                <img className="thumbnail2" src="/assets/highlights/thumb2.png" />
              )}
            </Gif>
            <Gif
              onMouseEnter={() => setEnableGif3(true)}
              onMouseLeave={() => setEnableGif3(false)}
            >
              <ButtonPlay>
                <BsFillPlayFill size={22} />
              </ButtonPlay>
              {enableGif3 ? (
                <img src="/assets/highlights/gif3.gif" alt="gif3" className="gif3" />
              ) : (
                <img className="thumbnail3" src="/assets/highlights/thumb3.png" />
              )}
            </Gif>
          </MiddleDiv>
          <Gif
            onMouseEnter={() => setEnableGif4(true)}
            onMouseLeave={() => setEnableGif4(false)}
          >
            <ButtonPlay>
              <BsFillPlayFill size={22} />
            </ButtonPlay>
            {enableGif4 ? (
              <img src="/assets/highlights/gif4.gif" alt="gif4" className="gif4" />
            ) : (
              <img className="thumbnail4" src="/assets/highlights/thumb4.png" />
            )}
          </Gif>
        </Gifs>
      </Wrapper>
    </Container>
  )
}
