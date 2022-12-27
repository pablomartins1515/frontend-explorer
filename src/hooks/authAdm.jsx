import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
export const AuthContext = createContext({})

function AuthProviderAdm({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessionsadm", { email, password })
      const { user, token } = response.data
      localStorage.setItem("@explorerfood: adm", JSON.stringify(user))
      localStorage.setItem("@explorerfood: token", token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@explorerfood: token")
    localStorage.removeItem("@explorerfood: adm")
    setData({})
  }
  useEffect(() => {
    const token = localStorage.getItem("@explorerfood: token")
    const user = localStorage.getItem("@explorerfood: adm")
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, signOut, adm: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthAdm() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProviderAdm, useAuthAdm }