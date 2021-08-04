import { Banner } from './components/Banner'
import { Biography } from './components/Biography'
import { Container } from './styles/app'

export const App: React.FC = () => {
  return (
    <Container>
      <Banner />
      <Biography />
    </Container>
  )
}
