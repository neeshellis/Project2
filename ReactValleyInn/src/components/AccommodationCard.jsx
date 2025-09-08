import * as React from 'react';
import data from '../data/data.json'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AccommodationCard({title, description, image, price}) {
    console.log(title)
  return (
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="p" component="div">
         {title} 
        </Typography>
        <CardMedia
        component="img"
        alt={title}
        height="140"
        image= {image}
      />
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
       <Typography variant="h6" sx={{ color: 'text.secondary', color: '#333815', fontWeight: 600 }}>
          {price}
        </Typography>
      </CardContent>

      <CardActions>
        {/* <Button size="small">Book</Button> */}
      </CardActions>
    </Card>
  );
}

