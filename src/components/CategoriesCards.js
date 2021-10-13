import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { StaticImage } from 'gatsby-plugin-image';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        margin: '4rem auto 3rem'
    },
    card: {
        position: 'relative',
    },
    text: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem',
        border: '1px solid #fff',
        color: '#fff',
        backgroundColor: 'rgba(0,0,0,0.2)',
        transition: 'all 200ms ease-in-out',
        '& h4': {
            fontFamily: 'Dancing Script',
            fontWeight: 500
        },
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.4)'
        }
    }
}));

const CategoriesCards = () => {
    const classes = useStyles();

    return (
        <section className={classes.root}>
            <Container maxWidth='lg' className={classes.container}>
                <Grid container spacing={4} justifyContent='center' alignItems='center'>
                    <Grid item md={4} sm={6} className={classes.card}>
                        <Link to='/sante'>
                            <StaticImage src='../assets/images/sante small.jpg' alt='santé' placeholder='blurred' />
                            <div className={classes.text}>
                                <Typography variant='h4'>Santé</Typography>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={6} className={classes.card}>
                        <Link to='/nutrition'>
                            <StaticImage src='../assets/images/nutrition small.jpg' alt='nutrition' placeholder='blurred' />
                            <div className={classes.text}>
                                <Typography variant='h4'>Nutrition</Typography>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={6} className={classes.card}>
                        <Link to='/fitness'>
                            <StaticImage src='../assets/images/fitness small.jpg' alt='fitness' placeholder='blurred' />
                            <div className={classes.text}>
                                <Typography variant='h4'>Fitness</Typography>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={6} className={classes.card}>
                        <Link to='/bien-etre'>
                            <StaticImage src='../assets/images/bien-etre small.jpg' alt='bien-être' placeholder='blurred' />
                            <div className={classes.text}>
                                <Typography variant='h4'>Bien-être</Typography>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} sm={6} className={classes.card}>
                        <Link to='/beaute'>
                            <StaticImage src='../assets/images/beaute small.jpg' alt='beauté' placeholder='blurred' />
                            <div className={classes.text}>
                                <Typography variant='h4'>Beauté</Typography>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

export default CategoriesCards;