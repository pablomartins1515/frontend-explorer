import { Container } from './styles'
import { useStatePage } from '../../hooks/statePage'
import { BsLightbulbOff } from 'react-icons/bs'
import { BsLightbulb } from 'react-icons/bs'

export function StatePage({ StatePage }) {
  const { handleStatesPages } = useStatePage()

  function handleState() {
    if (StatePage == true) {
      handleStatesPages(false)
    } else {
      handleStatesPages(true)
    }
  }

  return (
    <Container>
      <div onClick={handleState} className="statePage">
        {StatePage ? <BsLightbulb className="svgState" /> : <BsLightbulbOff className="svgState" />}
      </div>
    </Container>
  )
}