import { useState } from "react"
import { api } from "../../services/api"
import { BsFillHexagonFill } from 'react-icons/bs'
import { Container } from './styles'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useStatePage } from '../../hooks/statePage'
import { StatePage } from '../../components/StatePage'

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { statePage } = useStatePage()

  function handleSignUp() {
    if (!name || !email) {
      return alert("Preencha todos os campos")
    }
    if (password.length < 6) {
      return alert("A senha tem que ter pelo menos 6 caracteres")
    }
    api.post("/users", { name, email, password }).then(() => { alert("Usuário cadastrado com sucesso!"); navigate("/") }).catch(error => { if (error.response) { alert(error.response.data.message) } else { alert("Não foi possível cadastrar!") } })
  }
  return (
    <Container >
      <main className={statePage ? "light" : "dark"}>
        <header>
          <StatePage StatePage={statePage} className="statePage" />
          <BsFillHexagonFill className={statePage ? "svgLight" : "svgDark"}/>
          <h3 className={statePage ? "h3Light" : "h3Dark"}>food explorer</h3>
        </header>
        <div className={statePage ? "divLight" : "divDark"}>
          <h1 className={statePage ? "h1Light" : "h1Dark"}>Crie a sua conta</h1>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="name">Seu nome</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="name" placeholder="Exemplo: Pablo Martins" onChange={e => setName(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="email">Email</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="text" id="email" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="input">
            <label className={statePage ? "labelLight" : "labelDark"} htmlFor="password">Senha</label>
            <input className={statePage ? "inputLight" : "inputDark"} type="password" id="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignUp}>Criar conta</Button>
          <Link  className={statePage ? "linkLight" : "linkDark"} to="/">Já tenho uma conta</Link>
        </div>
      </main>
    </Container >
  )
}