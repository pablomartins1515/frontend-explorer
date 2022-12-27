import { Container } from './styles'
import { AiFillHeart } from "react-icons/ai"
import { AiOutlineHeart } from "react-icons/ai"
import { useState, useEffect } from "react"
import { api } from "../../services/api"

export function FavoriteDrinks({drink_id}) {
  
  const [favorite, setFavorite] = useState()

  useEffect(() => {
    async function Favorite() {
      const response = await api.get(`/favoritesdrinks/${drink_id}`)
      //console.log(response.data)
      //console.log(response.data.favoriteDish.length === 0)
      
      if (response.data.favoriteDrink.length === 0) {
        setFavorite(false)
      } else {
        setFavorite(true)
      }
    }
    Favorite()
  }, [])
 
  async function handleFavorite() {
    if (favorite == true) {
      setFavorite(false)
      await api.delete(`/favoritesdrinks/${drink_id}`)
    } else {
      setFavorite(true)
      await api.post("/favoritesdrinks", { drink_id })
    }
  }
  return (
    <Container>
      <div className="favorite" onClick={handleFavorite}>
        {!favorite ? <AiOutlineHeart /> : <AiFillHeart />}
      </div>
    </Container>
  )
}