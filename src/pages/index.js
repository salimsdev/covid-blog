import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardActionArea } from 'gatsby-theme-material-ui';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Button } from 'gatsby-theme-material-ui';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({
  header: {
    height: '70vh'
  },
  containerHeader: {
    display: 'flex',
    padding: 0,
    height: '100%'
  },
  left: {
    position:'relative',
    flex: 3,
    height: '100%'
  },
  right: {
    flex: 1,
    height: '100%',
    border: '0.75rem solid #b39ddb',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  img: {
    height: '100%'
  },
  text: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '0 1rem'
  },
  containerCards: {
    margin: '3rem auto',
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      margin: '1rem auto',
      padding: '0 0.2rem'
    },
    [theme.breakpoints.down('md')]: {
      margin: '1.5rem auto',
      padding: '0 0.2rem'
    }
  },
  card: {
    [theme.breakpoints.up('md')]: {
      height: 420
    }
  },
  horizontalCard: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      '& h5': {
        marginBottom: '1rem'
      }
    }    
  },
  cardContent: {
    [theme.breakpoints.up('md')]: {
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between'
    }
  }
}));

const Home = () => {
    const classes = useStyles();
    
    return (
        <Layout>
            <header className={classes.header}>
                <Container maxWidth='xl' className={classes.containerHeader}>
                    <div className={classes.left}>
                        <StaticImage src='../assets/images/header.jpg' alt='landscape' className={classes.img} placeholder='blurred' />
                        <div className={classes.text}>
                            <Typography variant='h1' align='center'>Santé et Bien-être</Typography>
                            <Typography variant='h4' align='center'>Apprenez à vous soigner Naturellement et retrouvez Bien-être, Energie et Confiance.</Typography>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <StaticImage src='../assets/images/yoga-portrait.jpg' alt='slider' className={classes.img} placeholder='blurred' />
                    </div>
                </Container>
            </header>
            <section>
                <Container maxWidth='lg' className={classes.containerCards}>
                    <Grid container spacing={3}>
                        <Grid item md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <StaticImage src='../assets/images/bien-etre small.jpg' alt='bien-être' placeholder='blurred' />
                                    <CardContent>
                                        <Typography variant='h5' color='textPrimary'>Bien-être</Typography>
                                        <Typography variant='body2' color='textPrimary'>Des idées et des solutions pour toujours plus de bien-être au quotidien</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>Voir plus</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <StaticImage src='../assets/images/fitness small.jpg' alt='bien-être' placeholder='blurred' />
                                    <CardContent>
                                        <Typography variant='h5' color='textPrimary'>Fitness</Typography>
                                        <Typography variant='body2' color='textPrimary'>Pleins d'articles pour pratiquer une activité physique en ligne avec vos objectifs</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>Voir plus</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <StaticImage src='../assets/images/nutrition small.jpg' alt='bien-être' placeholder='blurred' />
                                    <CardContent>
                                        <Typography variant='h5' color='textPrimary'>Nutrition</Typography>
                                        <Typography variant='body2' color='textPrimary'>Des conseils et des recettes pour manger sainement en se faisant plaisir</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>Voir plus</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={8} sm={6}>
                            <Card className={`${classes.card} ${classes.horizontalCard}`}>
                                <CardActionArea>
                                    <StaticImage src='../assets/images/sante small.jpg' alt='bien-être' placeholder='blurred' className={classes.img} />
                                </CardActionArea>
                                <div className={classes.cardContent}>
                                    <CardContent>
                                        <Typography variant='h5' color='textPrimary'>Santé</Typography>
                                        <Typography variant='body2' color='textPrimary'>Savoir soigner les petits maux du quotidien et prévenir les maladies graves naturellement</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>Voir plus</Button>
                                    </CardActions>
                                </div>
                            </Card>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <StaticImage src='../assets/images/beaute small.jpg' alt='bien-être' placeholder='blurred' />
                                    <CardContent>
                                        <Typography variant='h5' color='textPrimary'>Beauté</Typography>
                                        <Typography variant='body2' color='textPrimary'>Nos conseils beauté fondés sur des méthodes naturelles respectueuses de votre corps</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>Voir plus</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </Layout>
    );
};

export default Home;
