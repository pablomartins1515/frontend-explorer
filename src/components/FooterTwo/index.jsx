import { Container } from './styles'
import { BsFillHexagonFill } from 'react-icons/bs'

export function FooterTwo() {
  return (
    <Container>
    <div className="dark">
      <div className="logo">
        <BsFillHexagonFill  className="darkSvg"/>
        <span className="darkLogo">food explorer</span>
      </div>
      <span className="darkSpan">© 2022 - Todos os direitos reservados.</span>
    </div>
    </Container >
  )
}