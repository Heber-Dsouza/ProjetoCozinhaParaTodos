import React from 'react'
import { useParams } from 'react-router-dom'

import { BASE_URL } from '../../constants/urls'
import useRequestData from '../../hooks/useRequestData'

import { Typography } from '@mui/material'
import { RecipeImage, ScreenContainer, RecipeContainer } from "./styled"

const RecipeDetailPage = () => {

  const params = useParams()

  const recipes = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0]
  console.log(recipes);

  return (
    <ScreenContainer>
        {recipes && 
          <RecipeContainer>
            <RecipeImage src={recipes.image} alt="" />
            <Typography align='center' variant='h5' color={"primary"} >{recipes.title}</Typography>
            <Typography fontStyle={"italic"} gutterBottom align='center' variant='h6' color={"primary"} >Postado por: {recipes.userName} - {recipes && recipes.createdAt}</Typography>
            <Typography align='left' >{recipes.description}</Typography>
          </RecipeContainer>
        }
      
    </ScreenContainer>
  )
}

export default RecipeDetailPage