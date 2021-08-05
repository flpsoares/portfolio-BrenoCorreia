import { Container, Title, Gifs, Wrapper, MiddleDiv, Background } from './style'

export const Highlights: React.FC = () => {
  return (
    <Container>
      <Background />
      <Wrapper>
        <Title>HIGHLIGHTS</Title>
        <Gifs>
          <img src="/assets/highlights/gif1.gif" alt="gif1" className="gif1" />
          <MiddleDiv>
            <img src="/assets/highlights/gif2.gif" alt="gif2" className="gif2" />
            <img src="/assets/highlights/gif3.gif" alt="gif3" className="gif3" />
          </MiddleDiv>
          <img src="/assets/highlights/gif4.gif" alt="gif4" className="gif4" />
        </Gifs>
      </Wrapper>
    </Container>
  )
}
