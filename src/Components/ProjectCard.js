import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";
import {Link} from 'react-router-dom' ;



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


  return (
    <>
  
    <Grid container spacing={4} className={classes.gridContainer} >
      
      <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/projectzoo'}>
        <CardMedia
          className={classes.media}
          image={"./animation.gif"}
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
          to={'/movie_review'}>
        <CardMedia
          className={classes.media}
          image={'./movie.png'}
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
          to={'/oasis'}>
        <CardMedia
          className={classes.media}
          image={'./Oasis/frontpage.png'}
          title="Oasis"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Oasis
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>


      <Grid item xs={12} sm={6} md={4}>
    <Card className={classes.root} >
      <CardActionArea component={Link}
          to={'/designathon'}>
        <CardMedia
          className={classes.media}
          image={'./designathon.png'}
          title="designathon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Design For Transportation
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Grid>
      
      </Grid>
     

     
      
</>
  );
}