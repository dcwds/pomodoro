import React, { createContext } from "react"
import useNotify from "../hooks/use-notify"

export const TimersContext = createContext()

const Provider = ({ children }) => {
  const notify = useNotify()

  return (
    <TimersContext.Provider value={ { notify: { ...notify } } }>
      { children }
    </TimersContext.Provider>
  )
}

export default Provider
