import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import CategoriesCards from '../components/CategoriesCards';
import FeaturedPosts from '../components/FeaturedPosts';
import LastPosts from '../components/LastPosts';

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
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: '0 1rem',
    [theme.breakpoints.down('sm')]: {
        padding: '0 0.2rem',
    }
  },
  containerLower: {
    padding: 0,
    margin: '3rem auto',
    [theme.breakpoints.down('xs')]: {
        paddingLeft: '0.2rem',
        margin: '1rem auto'
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
                            <Typography variant='h4' align='center' gutterBottom>Apprenez à vous soigner Naturellement et retrouvez Bien-être, Energie et Confiance.</Typography>
                            <Typography variant='h4' align='center'>Vous n'êtes pas seul.</Typography>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <StaticImage src='../assets/images/yoga-portrait.jpg' alt='slider' className={classes.img} placeholder='blurred' />
                    </div>
                </Container>
            </header>            
            <FeaturedPosts />
            <section>
                <Container maxWidth='lg' className={classes.containerLower}>
                    <Grid container spacing={3}>
                        <LastPosts />
                        <Grid item sm={4}></Grid>
                    </Grid>
                </Container>
            </section>
            <Container maxWidth='sm'><Divider /></Container>
            <CategoriesCards />
        </Layout>
    );
};

export default Home;
