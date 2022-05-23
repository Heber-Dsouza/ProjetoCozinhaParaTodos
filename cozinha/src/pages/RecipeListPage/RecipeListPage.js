import React from 'react'
import styled from '@emotion/styled';

import {BASE_URL} from "../../constants/urls"

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import RecipeCard from '../../components/Header/RecipeCard/RecipeCard'
import useRequestData from '../../hooks/useRequestData';

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

  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
  console.log(recipes);

  const recipesList = recipes && recipes.map((recipes) => {
    return (
      <Grid item xs={3} sm={3} md={3} >
        <RecipeCard 
          key={recipes.recipe_id}
          image={recipes.image} 
          title={recipes.title}
          onClick={()=> null}
        />
      </Grid>
    )
  })

  return (
    <Container>


      <Box sx={{ width: '95%' }} justifyItems={"center"}>
        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent={"center"} columns={{ xs: 3, sm: 8, md: 15 }}>         
          {recipesList}
        </Grid>
      </Box>



    </Container>
  )
}

export default RecipeListPage