import { Container, Email, Whatsapp } from './style'

export const ContactButtons: React.FC = () => {
  return (
    <Container>
      <Email target="_blank" href="mailto:po.fa19701104@gmail.com">
        <img src="/assets/contact/email.svg" alt="email" />
      </Email>
      <Whatsapp
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511981432729"
      >
        <img src="/assets/contact/whatsapp.svg" alt="whatsapp" />
      </Whatsapp>
    </Container>
  )
}
