import { Container } from './styles'
import { BsFillHexagonFill } from 'react-icons/bs'
import { useStatePage } from '../../hooks/statePage'

export function Footer() {
  const { statePage } = useStatePage()
  return (
    <Container>
    <div className={statePage ? "light" : "dark"}>
      <div className="logo">
        <BsFillHexagonFill  className={statePage ? "lightSvg" : "darkSvg"}/>
        <span className={statePage ? "lightLogo" : "darkLogo"}>food explorer</span>
      </div>
      <span className={statePage ? "lightSpan" : "darkSpan"}>© 2022 - Todos os direitos reservados.</span>
    </div>
    </Container >
  )
}