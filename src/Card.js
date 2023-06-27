import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from './qa.png'
import { flexbox, grid } from '@mui/system';
export default function Card2(props) {
  return (
    <Card sx={{ maxWidth: 300,maxHeight: 1100, backgroundColor: 'lightyellow', borderBlockColor:'black', border:'3px'}} className= 'qqq'>
      <CardMedia
        component="img"
        alt="etsy"
        height="140"
        image={img}
      className='zzz'/>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <div className='card__top'>  {props.title  }</div>
        </Typography>
        <Typography className='ccc' variant="body2" color="text.secondary">
        <div className='ccc'> PRICE: {props.price}</div>
        </Typography>
        <Typography className='ddd' variant="body2" color="text.secondary">
        <div className='ddd'> VIEWS: {props.views}</div>
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button size="small"><a className='aaa' href={props.url}>Learn More</a></Button>
      </CardActions>
    </Card>
  );
}
