import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea, Button } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
    containerCards: {
        margin: '3rem auto',
        padding: 0,
        [theme.breakpoints.down('md')]: {
            margin: '1.5rem auto',
            padding: '0 0.2rem'
        },
        [theme.breakpoints.down('xs')]: {
          margin: '1rem auto'
        }
    },
    card: {
        borderRadius: 0,
        [theme.breakpoints.up('md')]: {
          height: 420
    }
    },
    horizontalCard: {
        [theme.breakpoints.up('md')]: {
          display: 'flex',
          '& h5': {
            marginBottom: '2rem'
          }
        }    
    },
    img: {
        height: '100%'
    },
    cardContent: {
        [theme.breakpoints.up('md')]: {
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between'
        }
    }
}));

const CategoriesCards = () => {
    const classes = useStyles();

    return (
        <section>
            <Container maxWidth='lg' className={classes.containerCards}>
                <Grid container spacing={3}>
                    <Grid item md={4} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea to='/bien-etre'>
                                <StaticImage src='../assets/images/bien-etre small.jpg' alt='bien-être' placeholder='blurred' />
                                <CardContent>
                                    <Typography variant='h5' color='textPrimary'>Bien-être</Typography>
                                    <Typography variant='body2' color='textPrimary'>Des idées et des solutions pour améliorer votre bien-être au quotidien</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button to='/bien-etre' size='small' color='primary'>Voir plus</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea to='/fitness'>
                                <StaticImage src='../assets/images/fitness small.jpg' alt='bien-être' placeholder='blurred' />
                                <CardContent>
                                    <Typography variant='h5' color='textPrimary'>Fitness</Typography>
                                    <Typography variant='body2' color='textPrimary'>Pleins d'articles pour pratiquer une activité physique en ligne avec vos objectifs</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button to='/fitness' size='small' color='primary'>Voir plus</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea to='/nutrition'>
                                <StaticImage src='../assets/images/nutrition small.jpg' alt='bien-être' placeholder='blurred' />
                                <CardContent>
                                    <Typography variant='h5' color='textPrimary'>Nutrition</Typography>
                                    <Typography variant='body2' color='textPrimary'>Des conseils et des recettes pour manger sainement en se faisant plaisir</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button to='/nutrition' size='small' color='primary'>Voir plus</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item md={8} sm={6}>
                        <Card className={`${classes.card} ${classes.horizontalCard}`}>
                            <CardActionArea to='/sante'>
                                <StaticImage src='../assets/images/sante small.jpg' alt='bien-être' placeholder='blurred' className={classes.img} />
                            </CardActionArea>
                            <div className={classes.cardContent}>
                                <CardContent>
                                    <Typography variant='h5' color='textPrimary'>Santé</Typography>
                                    <Typography variant='body2' color='textPrimary'>Savoir soigner les petits maux du quotidien et prévenir les maladies graves naturellement</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button to='/sante' size='small' color='primary'>Voir plus</Button>
                                </CardActions>
                            </div>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea to='/beaute'>
                                <StaticImage src='../assets/images/beaute small.jpg' alt='bien-être' placeholder='blurred' />
                                <CardContent>
                                    <Typography variant='h5' color='textPrimary'>Beauté</Typography>
                                    <Typography variant='body2' color='textPrimary'>Nos conseils beauté fondés sur des méthodes naturelles respectueuses de votre corps</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button to='/beaute' size='small' color='primary'>Voir plus</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default CategoriesCards;