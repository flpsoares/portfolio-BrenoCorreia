import { Container, DoubleColumn, SingleColumn, Title, Wrapper } from './style'

export const Gallery: React.FC = () => {
  return (
    <Container>
      <Title>GALERIA DE FOTOS</Title>
      <Wrapper>
        <DoubleColumn></DoubleColumn>
        <DoubleColumn></DoubleColumn>
        <SingleColumn></SingleColumn>
        <DoubleColumn></DoubleColumn>
        <DoubleColumn></DoubleColumn>
        <SingleColumn></SingleColumn>
        <DoubleColumn></DoubleColumn>
        <SingleColumn></SingleColumn>
        <DoubleColumn></DoubleColumn>
        <SingleColumn></SingleColumn>
        <DoubleColumn></DoubleColumn>
        <SingleColumn></SingleColumn>
      </Wrapper>
    </Container>
  )
}
