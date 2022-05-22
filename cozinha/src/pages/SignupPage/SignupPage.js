import React from 'react'

import slideOne from "../../assets/img/slides/meal_1.png"
import useUnprotectedPage from '../../hooks/useUnprotectedPage';
import SignupForm from './SignupForm';

import { ScreenContainer, SlideImg } from './styled'

const SignupPage = () => {

  useUnprotectedPage()

  return (
    <ScreenContainer>
      {/* <Welcome>Cadastre-se. É grátis!</Welcome> */}
      <SlideImg src={slideOne} />
      <SignupForm />
    </ScreenContainer>
  )
}

export default SignupPage