import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuthAdm } from '../../hooks/authAdm'
import { useState } from "react"
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SignInAdm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useAuthAdm()
  const { statePage } = useStatePage()

  function handleSignIn() {
    signIn({ email, password })
  }
  return (
    <Container>
      <main className={statePage ? "light" : "dark"}>
        <header>
          <StatePage StatePage={statePage} className="statePage" />
          <BsFillHexagonFill  className={statePage ? "svgLight" : "svgDark"} />
          <h3 className={statePage ? "h3Light" : "h3Dark"}>food explorer administrador</h3>
        </header>
        <div className={statePage ? "divLight" : "divDark"}>
          <h1 className={statePage ? "h1Light" : "h1Dark"}>Faça login</h1>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Email</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="password">Senha</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignIn}>Entrar</Button>
          <Link className={statePage ? "linkLight" : "linkDark"} to="/">Voltar para entrar como cliente</Link>
        </div>
      </main>
    </Container >
  )
}