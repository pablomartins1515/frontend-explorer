import { Container } from './styles'
import { useStatePage } from '../../hooks/statePage'

export function ButtonTwo({ children }) {
  const { statePage } = useStatePage()
  return (
    <Container type="button">
      <div className={statePage ? "buttonLight" : "buttonDark"}>
        {children}
      </div>
    </Container>
  )
}