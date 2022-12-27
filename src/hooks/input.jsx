import { createContext, useContext, useState, useEffect } from "react"
export const InputContext = createContext({})

function InputProvider({ children }) {
  const [search, setSearch] = useState("")


  function handleStates( Search ) {
    localStorage.setItem("@explorerfood: search", Search)
    setSearch(Search)
  }

  useEffect(() => {
    const search = localStorage.getItem("@explorerfood: search")
    if (search) {
      setSearch(search)
    }
  }, [])

  return (
    <InputContext.Provider value={{ search, handleStates }}>
      {children}
    </InputContext.Provider>
  )
}

function useInput() {
  const context = useContext(InputContext)
  return context
}

export { InputProvider, useInput }