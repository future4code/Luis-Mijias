import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './styled';
import Box from '@material-ui/core/Box';


const RecipeCard = (props) => {
  const classes = useStyles();

  return (
    <Box m={1}>
    <Card className={classes.root} onClick={props.onClick}>
        
      <CardActionArea>
        
        <CardMedia 
                     
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title.toUpperCase()}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      
    </Card>
    </Box>
  );
}

export default RecipeCard









































// import { CardActionArea, CardMedia, Typography } from '@material-ui/core'
// import React from 'react'
// import { RecipeCardContainer, RecipeCardContent } from './styled'



// const RecipeCard = (props) => {

//     return (
//         <RecipeCardContainer onClick={props.onClick} >
//             <CardActionArea>
//                 <CardMedia
//                 component={'img'}
//                 alt={props.title}
//                 height={'150px'}
               
//                 image={props.image}
//                 title={props.title}
//                 />
//                 <RecipeCardContent>
//                     <Typography align={'center'}>
//                         {props.title.toUpperCase()}

//                     </Typography>
//                 </RecipeCardContent>
//                 </CardActionArea>    
//         </RecipeCardContainer>
//     )
// }

// export default RecipeCard 
