import React, { useState } from 'react'
import { GlobalStateContext } from './context/GlobalStateContext'

const GlobalState = (props) => {

  const token = localStorage.getItem("token") //como isso será ativado?
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  return (
    <GlobalStateContext.Provider value={{rightButton, setRightButton, token}}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState