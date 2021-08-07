import {
  Container,
  FifthColumn,
  FirstColumn,
  FourthColumn,
  SecondColumn,
  SixthColumn,
  ThirdColumn,
  Wrapper
} from './style'

export const Gallery: React.FC = () => {
  return (
    <Container>
      <h1>GALERIA DE FOTOS</h1>
      <Wrapper>
        <FirstColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto11.jpg"
            alt="foto11"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto20.jpg"
            alt="foto20"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/galery/foto4.jpg"
            alt="foto4"
          />
          <img
            style={{ gridArea: 'f4' }}
            src="/assets/galery/foto2.jpg"
            alt="foto2"
          />
        </FirstColumn>
        <SecondColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto16.jpg"
            alt="foto16"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto21.jpg"
            alt="foto21"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/galery/foto17.jpg"
            alt="foto17"
          />
        </SecondColumn>
        <ThirdColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto18.jpg"
            alt="foto18"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto3.jpg"
            alt="foto3"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/highlights/thumb2.png"
            alt="thumb2"
          />
        </ThirdColumn>
        <FourthColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto8.jpg"
            alt="foto8"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto10.jpg"
            alt="foto10"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/galery/foto4.jpg"
            alt="foto4"
          />
          <img
            style={{ gridArea: 'f4' }}
            src="/assets/galery/foto12.jpg"
            alt="foto12"
          />
        </FourthColumn>
        <FifthColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto19.jpg"
            alt="foto19"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto20.jpg"
            alt="foto20"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/galery/foto14.jpg"
            alt="foto14"
          />
        </FifthColumn>
        <SixthColumn>
          <img
            style={{ gridArea: 'f1' }}
            src="/assets/galery/foto10.jpg"
            alt="foto10"
          />
          <img
            style={{ gridArea: 'f2' }}
            src="/assets/galery/foto21.jpg"
            alt="foto21"
          />
          <img
            style={{ gridArea: 'f3' }}
            src="/assets/galery/foto11.jpg"
            alt="foto11"
          />
        </SixthColumn>
      </Wrapper>
    </Container>
  )
}
