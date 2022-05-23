import React from 'react'
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom'

import {BASE_URL} from "../../constants/urls"

import { AddRecipeButton } from "./styled"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'

import RecipeCard from '../../components/Header/RecipeCard/RecipeCard'
import useRequestData from '../../hooks/useRequestData';
import { goToAddRecipesPage } from '../../routes/coordinator';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3.5% 2%;
  justify-content: center;
  /* align-items: center;
  align-content: center;
  justify-content: space-around;
  justify-items: center; */
`

const RecipeListPage = () => {

  const navigate = useNavigate() 

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = () => {
    
  }

  const recipesList = recipes && recipes.map((recipes) => {
    return (
      <Grid item xs={3} sm={3} md={3} >
        <RecipeCard 
          key={recipes.recipe_id}
          image={recipes.image} 
          title={recipes.title}
          onClick={onClickCard}
        />
      </Grid>
    )
  })

  return (
    <Container>


      <Box sx={{ width: '94%' }} justifyItems={"center"}>
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent={"center"} columns={{ xs: 3, sm: 8, md: 15 }}>         
          {recipesList}
        </Grid>
      </Box>

        <AddRecipeButton color="primary" aria-label="add" onClick={() => goToAddRecipesPage(navigate)}>
          <AddIcon />
        </AddRecipeButton>

    </Container>
  )
}

export default RecipeListPage