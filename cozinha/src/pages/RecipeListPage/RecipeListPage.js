import React from 'react'
import styled from '@emotion/styled';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import RecipeCard from '../../components/Header/RecipeCard/RecipeCard'

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */

`

const RecipeListPage = () => {

  return (
    <Container>

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
          <Grid item xs={3} sm={3} md={3} >
            <RecipeCard image={"https://picsum.photos/200/300"} title={"teste"} />
          </Grid>
          
          
        </Grid>
      </Box>

      {/* <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/>
      <RecipeCard/> */}


    </Container>
  )
}

export default RecipeListPage