import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom' ;
import Footer from './Footer';


const useStyles = makeStyles({
  root: {
    maxWidth:550,
  },
  media: {
    height: 240,
  },

  gridContainer:{
    paddingLeft: '60px',
    paddingTop: '100px',
    paddingBottom:'30px',
    width: '100%',
  },


});

export default function OrjectCard() {
  const classes = useStyles();
  const bsio=require("../Pics/bsio_logo.png");

  return (
    <>
  
    <Grid container spacing={4} className={classes.gridContainer} >
      
      <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/projectzoo'}>
        <CardMedia
          className={classes.media}
          image={bsio}
          title="Project_Zoo"
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="h2">
            Project Zoo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
    

    <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/projectzoo'}>
        <CardMedia
          className={classes.media}
          image={bsio}
          title="Movie Review"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Movie Review
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/projectzoo'}>
        <CardMedia
          className={classes.media}
          image={bsio}
          title="Movie Review"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Movie Review
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/projectzoo'}>
        <CardMedia
          className={classes.media}
          image={bsio}
          title="Movie Review"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Movie Review
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      
      </Grid>
      {/* <Footer/> */}

     
      
</>
  );
}