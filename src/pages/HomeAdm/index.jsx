import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import { api } from "../../services/api"
import { FooterTwo } from '../../components/FooterTwo'
import HomeImage from '../../assets/homeimage.png'
import { BiChevronRight } from 'react-icons/bi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { useRef } from 'react'
import { BsFillHexagonFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Container, Logout, Header, Input, Links } from './styles'
import { BiSearchAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useAuthAdm } from '../../hooks/authAdm'
import { GoTrashcan } from 'react-icons/go'

export function HomeAdm() {
  const [search, setSearch] = useState("")
  const [foods, setFoods] = useState([])
  const [foodsDrinks, setFoodsDrinks] = useState([])
  const [foodsDesserts, setFoodsDesserts] = useState([])
  const [requests, setRequests] = useState([])
  const [request, setRequest] = useState([])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/allrequests")
      setRequest(response.data.allRequests)
    }
    fetchRequests()
  }, [request])

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/request")
      setRequests(response.data.requests)
    }
    fetchRequests()
  }, [requests])

  useEffect(() => {
    async function fetchFoods() {
      const response = await api.get(`/dishes/?name=${search}`)
      setFoods(response.data.dishes)
    }
    fetchFoods()
  }, [search, foods])

  useEffect(() => {
    async function fetchFoodsDrinks() {
      const response = await api.get(`/drinks/?name=${search}`)
      setFoodsDrinks(response.data.drinks)
    }
    fetchFoodsDrinks()
  }, [search, foodsDrinks])

  useEffect(() => {
    async function fetchFoodsDesserts() {
      const response = await api.get(`/desserts/?name=${search}`)
      setFoodsDesserts(response.data.desserts)
    }
    fetchFoodsDesserts()
  }, [search, foodsDesserts])

  async function handleDeleteDish(id) {
    if (confirm("Tem certeza que deseja deletar este prato?"))
    await api.delete(`/dishes/${id}`)
  }

  async function handleDeleteDessert(id) {
    if (confirm("Tem certeza que deseja deletar esta sobremesa?"))
    await api.delete(`/desserts/${id}`)
  }

  async function handleDeleteDrink(id) {
    if (confirm("Tem certeza que deseja deletar esta bebida?"))
    await api.delete(`/drinks/${id}`)
  }

  const carousel = useRef(null)
  const carouselTwo = useRef(null)
  const carouselThree = useRef(null)

  const handleLeftClick = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = (e) => {
    e.preventDefault()
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  const handleLeftClickTwo = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselTwo.current.scrollLeft -= carouselTwo.current.offsetWidth
  }

  const handleRightClickTwo = (e) => {
    e.preventDefault()
    carouselTwo.current.scrollLeft += carouselTwo.current.offsetWidth
  }

  const handleLeftClickThree = (e) => {
    e.preventDefault()
    console.log(carousel.current)
    carouselThree.current.scrollLeft -= carouselThree.current.offsetWidth
  }

  const handleRightClickThree = (e) => {
    e.preventDefault()
    carouselThree.current.scrollLeft += carouselThree.current.offsetWidth
  }

  const { signOut } = useAuthAdm()
  const navigate = useNavigate()

  function handleSignOut() {
    navigate("/adm")
    signOut()
  }
  

  return (
    <Container>
      <Header>
        <div className="logo">
          <BsFillHexagonFill />
          <span>food explorer</span>
        </div>
        <div className="gap">
          <Input >
            <BiSearchAlt />
            <input type="text" placeholder="Busque pelas suas refeições" onChange={e => setSearch(e.target.value)} />
          </Input>
        </div>
        <Logout onClick={handleSignOut}>
          <FiLogOut />
        </Logout>
      </Header>

      <main>
        <div className="logoHome">
          <img src={HomeImage} alt="imagem da home" />
          <div className="logoText">
            <div className="addFoods">
              <span>Adicionar novos:</span>
              <Links to="/editdish">Pratos</Links>
              <Links to="/editdesserts">Sobremesas</Links>
              <Links to="/editdrinks">Bebidas</Links>
            </div>
            <div className="requests">
              <Links to="/requestsadm">Administrar pedidos dos clientes</Links>
            </div>
          </div>

        </div>
        <h2 id="title">Pratos principais</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClick}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClick}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carousel} className="listFood">
            <div className="listFoods">
              {
                foods.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <button className="button" onClick={() => handleDeleteDish(food.id)}>
                      <GoTrashcan />
                    </button>
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/detailsadm/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                    <div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <h2 id="title">Sobremesas</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClickTwo}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClickTwo}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carouselTwo} className="listFood">
            <div className="listFoods">
              {
                foodsDesserts.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <button className="button" onClick={() => handleDeleteDessert(food.id)}>
                      <GoTrashcan />
                    </button>
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/detailsadmdesserts/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <h2 id="title">Bebidas</h2>
        <div className="container">
          <div className="arrowOne" onClick={handleLeftClickThree}>
            <button ><IoIosArrowBack /></button>
          </div>
          <div className="arrowTwo" onClick={handleRightClickThree}>
            <button ><IoIosArrowForward /></button>
          </div>
          <div ref={carouselThree} className="listFood">
            <div className="listFoods">
              {
                foodsDrinks.map(food => (
                  <div className="cardFood" key={String(food.id)} >
                    <button className="button" onClick={() => handleDeleteDrink(food.id)}>
                      <GoTrashcan />
                    </button>
                    <img src={`${api.defaults.baseURL}/files/${food.image}`} alt="imagem do prato" />
                    <Link to={`/detailsadmdrinks/${food.id}`}><a><h2>{food.name}<BiChevronRight /></h2></a></Link>
                    <p>{food.description}</p>
                    <span className="price">R$ {String(Number(food.price).toFixed(2)).replace(".", ",")}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>
      <FooterTwo />
    </Container>
  )
}



/*


*/


