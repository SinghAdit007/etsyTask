import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './qa.png'
export default function Card2(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="etsy"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className='card__top'>  {props.title  }</div>
        </Typography>
        <Typography className='ccc' variant="body2" color="text.secondary">
        <div className='ccc'> {props.description}</div>
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small"><a className='aaa' href={props.url}>Learn More</a></Button>
      </CardActions>
    </Card>
  );
}
