import React from 'react'


import slideOne from "../../assets/img/slides/meal_1.png"
import LoginForm from './LoginForm';

import { ScreenContainer, SlideImg } from './styled'

const LoginPage = () => {

  

  return (
    <ScreenContainer>
      {/* <h1>Cozinha Para Todos</h1> */}
      <SlideImg src={slideOne} />
      <LoginForm/>
    </ScreenContainer>
  )
}

export default LoginPage
