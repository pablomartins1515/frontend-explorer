import { Container } from './styles'
import { useStatePage } from '../../hooks/statePage'

export function Button({ children, loading = false, ...rest }) {
  const { statePage } = useStatePage()
  return (
    <Container type="button" disabled={loading} {...rest}>
      <button className={statePage ? "buttonLight" : "buttonDark"}>
        {loading ? 'Carregando...' : children}
      </button>
    </Container>
  )
}