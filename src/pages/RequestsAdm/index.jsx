import { Container, ButtonText } from './styles'
import { HeaderTwo } from '../../components/HeaderTwo'
import { FooterTwo } from '../../components/FooterTwo'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { api } from "../../services/api"
import { BsTrashFill } from "react-icons/bs"

export function RequestsAdm() {
  const [request, setRequest] = useState([])
  //const [status, setStatus] = useState("")
  //const [id, setId] = useState(33)

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/requestsadm")
      setRequest(response.data.allRequestsUsers)
    }
    fetchRequests()
  }, [request])

  async function handleOption(value, id) {
    console.log(value, id)
    if (value === "valueOne") {
      const status = "🔴Pendente"
      await api.put("/requestsadm", { status, id })
    } else if (value === "valueTwo") {
      const status = "🟡Preparando"
      await api.put("/requestsadm", { status, id })
    } else if (value === "valueThree") {
      const status = "🟢Entregue"
      await api.put("/requestsadm", { status, id })
    }
  }

  async function handleDelete(id, status) {
    if (status === "🔴Pendente" || status === "🟡Preparando") {
      alert("Você não pode apagar o item se não tiver sido entregue!")
      return
    } else if (confirm("Tem certeza que deseja apagar? Se você apagar, na conta do seu cliente também vai ser apagado este item, espere um pouco caso a entrega tenha sido muito recente!")) {
      await api.delete(`/allrequests/${id}`)
    }
  }

return (
  <Container>
    <HeaderTwo />
    <main>
      <ButtonText to="/adm"><SlArrowLeft />voltar</ButtonText>
      <h1 >Todos os Pedidos</h1>
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Nome do cliente</th>
            <th>Código</th>
            <th>Detalhamento</th>
            <th>Data e hora</th>
          </tr>
        </thead>
        <tbody>
          {
            request.map(request => (
              <tr key={String(request.id)}>
                <td>
                  <select name="select" onChange={(e) => handleOption(e.target.value, request.id)}>
                    <option selected={request.status === "🔴Pendente"} value="valueOne">🔴Pendente</option>
                    <option selected={request.status === "🟡Preparando"} value="valueTwo">🟡Preparando</option>
                    <option selected={request.status === "🟢Entregue"} value="valueThree">🟢Entregue</option>
                  </select>
                </td>
                <td>{request.name}</td>
                <td>{request.id}</td>
                <td>{request.details}</td>
                <td>{request.created_at} <button onClick={() => handleDelete(request.id, request.status)} ><BsTrashFill />Excluir</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
    <FooterTwo />
  </Container>
)
}