import { Achievements } from './components/Achievements'
import { Banner } from './components/Banner'
import { Biography } from './components/Biography'
import { ContactButtons } from './components/ContactButtons'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'
import { Highlights } from './components/Highlights'
import { Container } from './styles/app'

export const App: React.FC = () => {
  return (
    <Container>
      <Banner />
      <Biography />
      <Achievements />
      <Highlights />
      <Gallery />
      <Footer />
      <ContactButtons />
    </Container>
  )
}
