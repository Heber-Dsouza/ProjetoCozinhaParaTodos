import * as React from 'react'
import { useNavigate } from "react-router-dom"

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import { StyledToolbar, LogoImg, LogoButton } from './styled'
import Logo from "../../assets/img/japanese-chef.jpg"
import { goToLoginPage, goToRecipeListPage } from '../../routes/coordinator'

const Header = () => {

  const navigate = useNavigate()

  return (
      <AppBar position="static">
        <StyledToolbar>
          
          <LogoButton color="inherit" onClick={() => goToRecipeListPage(navigate)} >
            <LogoImg src={Logo} alt="" /> Cozinha para Todos
          </LogoButton>
          <Button color="inherit" onClick={() => goToLoginPage(navigate)} >Login</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header