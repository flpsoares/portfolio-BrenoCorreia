import { Container, Email, Whatsapp } from './style'

export const ContactButtons: React.FC = () => {
  return (
    <Container>
      <Email href="#">
        <img src="/assets/contact/email.svg" alt="email" />
      </Email>
      <Whatsapp href="#">
        <img src="/assets/contact/whatsapp.svg" alt="whatsapp" />
      </Whatsapp>
    </Container>
  )
}
