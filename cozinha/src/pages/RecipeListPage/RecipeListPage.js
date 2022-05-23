import React from 'react'
import { useNavigate } from 'react-router-dom'

import {BASE_URL} from "../../constants/urls"

import { AddRecipeButton, Container } from "./styled"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add'

import RecipeCard from '../../components/Header/RecipeCard/RecipeCard'
import useRequestData from '../../hooks/useRequestData';
import { goToAddRecipesPage, goToRecipeDetailPage } from '../../routes/coordinator';


const RecipeListPage = () => {

  const navigate = useNavigate() 

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetailPage(navigate, id)
  }

  const recipesList = recipes && recipes.map((recipes) => {
    return (
      <Grid item xs={3} sm={3} md={3} >
        <RecipeCard 
          key={recipes.recipe_id}
          image={recipes.image} 
          title={recipes.title}
          onClick={() => onClickCard(recipes.recipe_id)}
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