import { Container } from './style'

export const Highlighter: React.FC<App.Date> = ({ team }) => {
  return (
    <Container>
      <img src={`/assets/teams/${team}.png`} alt="time" />
      <div></div>
    </Container>
  )
}
