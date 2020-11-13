import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={process.env.PUBLIC_URL + '/img/mbr-1920x1351.jpg'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lùn xoắn lá
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
          <strong>Tên khoa học: </strong> across all continents except Antarctica
          </Typography>
          <Typography variant="body2" color="textSecondary" component="span">
          <strong>Mô tả: </strong> across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Xem thông tin chi tiếc
        </Button>
      </CardActions>
    </Card>
  );
}