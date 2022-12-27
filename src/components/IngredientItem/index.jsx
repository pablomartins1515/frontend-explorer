import { FiPlus, FiX } from 'react-icons/fi'
import { Container } from './styles'

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return ( //uma coisa legal do styled-components é que podemos passar uma propriedade pra dentro do componente no styled components - readOnly é somente leitura - !isNew é porque se não é novo pode bloquear - vamos passar as propriedades para lugares diferentes
    <Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button type="button" onClick={onClick} className={isNew ? 'button-add' : 'button-delete'}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container> //a condição ternária é para colocar a imagem svg de acordo com a nota ser ou não nova - também vai haver uma condição ternária que se a nota for nova vai adicionar uma determinada classe com uma cor, caso contrário...
  )
}

