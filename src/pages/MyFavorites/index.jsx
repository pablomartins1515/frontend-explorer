import { ContainerOne, ContainerTwo, ButtonText } from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { SlArrowLeft } from 'react-icons/sl'
import { useState, useEffect } from 'react'
import { api } from "../../services/api"
import { useStatePage } from '../../hooks/statePage'

export function MyFavorites() {

  const [favoritesDish, setFavoritesDish] = useState([])
  const [favoritesDrink, setFavoritesDrink] = useState([])
  const [favoritesDessert, setFavoritesDessert] = useState([])
  const { statePage } = useStatePage()

  useEffect(() => {
    async function fetchFavoritesDish() {
      const response = await api.get("/favoritesdishes")
      setFavoritesDish(response.data.favoritesDishes)
    }
    fetchFavoritesDish()
  }, [])

  useEffect(() => {
    async function fetchFavoritesDish() {
      const response = await api.get("/favoritesdrinks")
      setFavoritesDrink(response.data.favoritesDrinks)
    }
    fetchFavoritesDish()
  }, [])

  useEffect(() => {
    async function fetchFavoritesDish() {
      const response = await api.get("/favoritesdesserts")
      setFavoritesDessert(response.data.favoritesDesserts)
    }
    fetchFavoritesDish()
  }, [])

  return (
    <ContainerOne>
      <ContainerTwo className={statePage ? "containerLight" : "containerDark"}>
        <Header />
        <main className={statePage ? "light" : "dark"}>
          <div className="button">
            <ButtonText to="/"><SlArrowLeft className={statePage ? "svgLight" : "svgDark"} /><p className={statePage ? "light" : "dark"}>voltar para a Home</p></ButtonText>
          </div>
          <div className="columns">
            <div className="columnOne">
              <h1 className={statePage ? "titleLight" : "titleDark"}>Pratos favoritos</h1>
              <div className="requests">
                {
                  favoritesDish.map(fav => (
                    <div className="request" key={String(fav.id)}>
                      <img src={`${api.defaults.baseURL}/files/${fav.image}`} alt="imagem do prato" />
                      <div className="Text">
                        <div className="text">
                          <span className="name">{fav.name}</span>
                        </div>
                        <p className={statePage ? "descriptionLight" : "descriptionDark"}>{fav.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="columnTwo">
              <h1 className={statePage ? "titleLight" : "titleDark"}>Sobremesas favoritas</h1>
              <div className="requests">
                {
                  favoritesDessert.map(fav => (
                    <div className="request" key={String(fav.id)}>
                      <img src={`${api.defaults.baseURL}/files/${fav.image}`} alt="imagem do prato" />
                      <div className="Text">
                        <div className="text">
                          <span className="name">{fav.name}</span>
                        </div>
                        <p className={statePage ? "descriptionLight" : "descriptionDark"}>{fav.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="columnTwo">
              <h1 className={statePage ? "titleLight" : "titleDark"}>Bebidas favoritas</h1>
              <div className="requests">
                {
                  favoritesDrink.map(fav => (
                    <div className="request" key={String(fav.id)}>
                      <img src={`${api.defaults.baseURL}/files/${fav.image}`} alt="imagem do prato" />
                      <div className="Text">
                        <div className="text">
                          <span className="name">{fav.name}</span>
                        </div>
                        <p className={statePage ? "descriptionLight" : "descriptionDark"}>{fav.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </ContainerTwo>
    </ContainerOne >
  )
}