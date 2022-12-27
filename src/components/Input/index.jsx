import { useNavigate } from 'react-router-dom'
import { Container } from './styles'
import { useState, useRef } from "react"
import { useInput } from '../../hooks/input'
import { api } from "../../services/api"
import { FaClock } from "react-icons/fa"
import { CgClose } from 'react-icons/cg'
import { CgCloseR } from 'react-icons/cg'
import { useStatePage } from '../../hooks/statePage'

export function Input({ children, placeholder, value }) {
  const [option, setOption] = useState([])
  const navigate = useNavigate()
  const input = useRef(null)
  const { handleStates } = useInput()
  const { statePage } = useStatePage()

  async function searchInput(e) {
    handleStates(e.target.value)
    if (e.target.value.length === 0) {
      setOption([])
      return
    } else if (e.target.value.length !== 0) {
    const response = await api.get(`/search/?search=${value}`)
    setOption(response.data.Search)
  }
  }

  async function SearchInput(e) {
    if (e.key === 'Enter') {
      if (e.target.value.length == 0) {
        alert("Digite algo para pesquisar!")
      } else {
        api.post("/search", { search: e.target.value })
        navigate("/")
      }
    }
  }

  async function handleSearch() {
    if (value.length == 0) {
      alert("Digite algo para pesquisar!")
    } else {
      await api.post("/search", { search: value })
      navigate("/")
    }
  }

  async function handleDelete(id) {
    await api.delete(`/search/${id}`)
    const response = await api.get(`/search/?search=${value}`)
    setOption(response.data.Search)
  }

  function HandleSearch(option) {
    handleStates(option)
    setOption([])
  }

  function closeSearch() {
    setOption([])
  }

  const resultList = option.map((option, idx) => {
    const { id, search } = option
    const delay = `${idx + 1}00ms`
    return (
      <li className="li" key={id} style={{ '--delay': delay }}><FaClock /> <p onClick={() => HandleSearch(search)} >{search}</p> <a onClick={() => handleDelete(id)} className="trash" title="Excluir"><CgClose /></a></li>
    )
  })

  return (
    <Container>
      <input className={statePage ? "light" : "dark"} ref={input} type="search" value={value} placeholder={placeholder} onKeyDown={(e) => SearchInput(e)} onChange={(e) => searchInput(e)} />
      <button onClick={handleSearch}>{children}</button>
      <div className={option.length === 0 ? "none" : "searchResults"}>
        <a onClick={closeSearch} className="close" title="Fechar"><CgCloseR /></a>
        <ul>
          {resultList}
        </ul>
      </div>

    </Container>
  )
}