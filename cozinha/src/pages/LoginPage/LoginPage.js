import React from 'react'

import slideOne from "../../assets/img/slides/meal_1.png"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import LoginForm from './LoginForm';

import { ScreenContainer, SlideImg, Welcome } from './styled'

const LoginPage = () => {

  useUnprotectedPage()

  return (
    <ScreenContainer>
      <Welcome>Bem-Vindo(a)!</Welcome>
      <SlideImg src={slideOne} />
      <LoginForm/>
    </ScreenContainer>
  )
}

export default LoginPage
