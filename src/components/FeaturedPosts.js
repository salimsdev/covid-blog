import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'gatsby-theme-material-ui';

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
        alignItems: 'center',
        '& a': {
            '&:hover': {
                textDecoration: 'none'
            }
        }
    },
    img: {
        marginBottom: '1rem',
        transition: 'opacity 500ms ease-in-out',
        '&:hover': {
            opacity: 0.7
        }
    },
    category: {
        fontWeight: 500,
        color: theme.palette.primary.main,
        marginBottom: '0.5rem',
        transition: 'color 200ms ease-in-out',
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    title: {
        lineHeight: 1.2,
        transition: 'color 200ms ease-in-out',
        '&:hover': {
            color: theme.palette.primary.light
        }
    }
}));

const FeaturedPosts = ({ posts }) => {
    const classes = useStyles();
    const { nodes } = posts;

    return (
        <section>
            <Container maxWidth='lg' className={classes.container}>
                <Grid container spacing={2}>
                    {nodes.map(({ category, description, title, image, slug, id }) => {
                        const imagePath = getImage(image);
                        const sluggedCategory = category.name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
                        return (
                            <Grid item md={4} sm={6} key={id}>
                                <div className={classes.card}>
                                    <Link to={`/${sluggedCategory}/${slug}`}><GatsbyImage image={imagePath} alt={title} placeholder='blurred' className={classes.img} /></Link>
                                    <Link to={`/${sluggedCategory}`}><Typography variant='subtitle2' align='center' className={classes.category}>{category.name.toUpperCase()}</Typography></Link>
                                    <Link to={`/${sluggedCategory}/${slug}`}><Typography variant='body1' color='textPrimary' align='center' gutterBottom className={classes.title}>{title}</Typography></Link>
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