import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolbar, LogoImg, LogoButton } from './styled'
import Logo from "../../assets/img/japanese-chef.jpg"
import { goToLoginPage, goToRecipeListPage } from '../../routes/coordinator'

const Header = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("token")
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButton("Login")
      goToLoginPage(navigate) //depois trocar para página inicial
    } else {
      goToLoginPage(navigate) //depois trocar para página inicial
    }
  }

  return (
      <AppBar position="static">
        <StyledToolbar>
          
          <LogoButton color="inherit" onClick={() => goToRecipeListPage(navigate)} >
            <LogoImg src={Logo} alt="" /> Cozinha para Todos
          </LogoButton>
          <Button color="inherit" onClick={rightButtonAction} >{rightButton}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header