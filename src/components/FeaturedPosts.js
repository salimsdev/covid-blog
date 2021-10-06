import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        margin: '3rem auto',
        [theme.breakpoints.down('xs')]: {
            padding: '0 0.2rem',
            margin: '1.5rem auto'
        }
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        marginBottom: '1rem'
    },
    category: {
        fontWeight: 500,
        color: theme.palette.primary.main,
        marginBottom: '0.5rem'
    },
    title: {
        lineHeight: 1.2
    }
}));

const FeaturedPosts = ({ posts }) => {
    const classes = useStyles();
    const { nodes } = posts;

    return (
        <section>
            <Container maxWidth='lg' className={classes.container}>
                <Grid container spacing={2}>
                    {nodes.map(({ category, description, title, image, id }) => {
                        const imagePath = getImage(image);
                        return (
                            <Grid item md={4} sm={6} key={id}>
                                <div className={classes.card}>
                                    <GatsbyImage image={imagePath} alt={title} placeholder='blurred' className={classes.img} />
                                    <Typography variant='subtitle2' align='center' className={classes.category}>{category.name.toUpperCase()}</Typography>
                                    <Typography variant='body1' color='textPrimary' align='center' gutterBottom className={classes.title}>{title}</Typography>
                                    <Typography variant='body2' color='textSecondary' align='center'>{description}</Typography>
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </section>
    );
};

export default FeaturedPosts;