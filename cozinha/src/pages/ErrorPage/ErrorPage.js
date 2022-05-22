import React from 'react'


import { ErrorPageContainer, ErrorImage, ErrorText } from "./styled"
import Idosa from "../../assets/img/ErrorPageSlides/Idosa.png"

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={Idosa}/>
      <ErrorText color={"primary"} variant={"h5"} align={"center"} >Erro 404 - Página Não Encontrada</ErrorText>
    </ErrorPageContainer>
  )
}

export default ErrorPage