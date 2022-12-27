import { useNavigate } from 'react-router-dom'
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container, Logout } from './styles'
import { FiLogOut } from 'react-icons/fi'
import { useAuthAdm } from '../../hooks/authAdm'

export function HeaderTwo() {
  const { signOut } = useAuthAdm()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/adm")
    signOut()
  }
  
  return (
    <Container>
      <div className="logo">
        <BsFillHexagonFill />
        <span>food explorer</span>
      </div>
      <div className="adm">
        <p>Administrador</p>
        <Logout onClick={handleSignOut}>
          <FiLogOut />
        </Logout>
      </div>
    </Container>
  )
}