import { createContext, useContext, useState, useEffect } from "react"
export const StatePageContext = createContext({})

function StatePageProvider({ children }) {
  const [statePage, setStatePage] = useState()

  function handleStatesPages(StatePage) {
    setStatePage(StatePage)
    localStorage.setItem("@explorerfood: statePage", StatePage)
  }

  useEffect(() => {
    const StatePage = localStorage.getItem("@explorerfood: statePage")
    if (StatePage === "true") {
      setStatePage(true)
    } else if (StatePage === "false") {
      setStatePage(false)
    }
  }, [])

  return (
    <StatePageContext.Provider value={{ statePage, handleStatesPages }}>
      {children}
    </StatePageContext.Provider>
  )
}

function useStatePage() {
  const context = useContext(StatePageContext)
  return context
}

export { StatePageProvider, useStatePage }