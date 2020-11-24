import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Image as ImageCloud} from 'cloudinary-react';
export default function ImgMediaCard(props) {
  return (
    <Card >
        <CardMedia>
          <ImageCloud cloudName="taoluanby" publicId={props.item.image.value.includes(',') ? props.item.image.value.substring(0,props.item.image.value.indexOf(',')) : props.item.image.value} width="350" height="200" crop="scale"/>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.item.ten_benh.value}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
          <strong>Mô tả: </strong> across all continents except Antarctica
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Xem thông tin chi tiếc
        </Button>
      </CardActions>
    </Card>
  );
}