import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function MediaCard({product,BasketFav,setBasketFav}) {
    console.log(BasketFav);
  return (
    <Grid item xs={8}>
    <Card  sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e)=>{
            setBasketFav({basket:[...BasketFav.Favorite],Favorite:[...BasketFav.Favorite]})
        }}>Basket</Button>
        <Button size="small" onClick={(e)=>{
            console.log(e.currentTarget);

        }}>Like</Button>
        
      </CardActions>
    </Card>
    </Grid>
  );
}
