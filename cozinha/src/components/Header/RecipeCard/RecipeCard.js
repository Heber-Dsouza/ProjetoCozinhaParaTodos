import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const RecipeCard = (props) => {
  return (
    <Card sx={{ maxWidth: 445 }} onClick={props.onClick} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={props.image}
          alt={props.title}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align='center'>
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default RecipeCard