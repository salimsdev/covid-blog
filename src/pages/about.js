import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Seo from '../components/Seo';

const useStyles = makeStyles(theme => ({
    container: {
        margin: '3rem auto',
        padding: '2rem 4rem',
        [theme.breakpoints.down('sm')]: {
            margin: '1rem auto',
            padding: '0 0.3rem'
        }
    },
    title: {
        fontFamily: 'Dancing Script',
        display: 'flex',
        justifyContent: 'center',
        padding: '3rem 0 4rem'
    },
    text: {
        fontFamily: 'Dancing Script',
        fontSize: '1.6rem',
        fontWeight: 500,
        marginBottom: '1rem'
    },
    team: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center'
    },
    subtitle: {
        fontFamily: 'Dancing Script',
        fontWeight: 500,
        margin: '2rem 0 1.5rem',
        [theme.breakpoints.down('sm')]: {
            margin: '0.5rem 0 1rem',
        }
    },
    author: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: '1rem'
    }
}));

const About = ({ data }) => {
    const classes = useStyles();
    const authors = data.authors.nodes;

    return (
        <Layout>
            <Seo title='A propos' isBlogPost={false} />
            <Container maxWidth='lg' className={classes.container}>
                <Typography variant='h2' color='textPrimary' className={classes.title} align='center'>
                    Nous sommes avec vous!
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text}>
                    J'ai créé ce site avec l'objectif d'inspirer les lecteurs, de les motiver et de les aider à évoluer pour devenir la meilleure version d'eux-même. 
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text}>
                    Mon souhait est que nous devenions une référence francophone dans le domaine de la santé et du bien-être, en fournissant un contenu de qualité et 
                    des conseils de haut niveau pour les passionnés de fitness, de beauté, de nutrition à la recherche d'un meilleur style de vie.
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text}>
                    Nous donnons le maximum pour être une source de motivation en offrant un contenu qui vous aidera à réussir!
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text}>
                    Nos lecteurs reviennent régulièrement découvrir nos derniers articles sur les nouvelles tendances bien-être et santé. Notre contenu est exclusivement 
                    écrit pour vous par nos experts dans les domaines de la santé, du fitness, de la nutrition et de la psychologie. Notre mission commune est de vous donner
                    les outils nécessaires pour vivre plus heureux.
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text}>
                    Vous n'êtes pas seul. Nous sommes avec vous!
                </Typography>
                <Typography variant='body1' color='textPrimary' className={classes.text} align='right'>
                    Alice.
                </Typography>
                <Grid container spacing={2}>
                    <Grid item sm={5} className={classes.team}>
                        <Typography variant='h4' color='textPrimary' className={classes.subtitle}> Notre équipe:</Typography>
                        {authors.map(({ name, photo, id}) => {
                            const avatarImage = getImage(photo);
                            return (
                                <div className={classes.author} key={id}>
                                    <Avatar className={classes.avatar}>
                                        <GatsbyImage image={avatarImage} alt={name} />
                                    </Avatar>
                                    <Typography>{name}</Typography>
                                </div>
                            )
                        })}
                    </Grid>
                    <Grid item sm={7}>
                        <StaticImage src='../assets/images/about.jpg' alt='chemin de fleurs' placeholder='blurred' layout='constrained' />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export const query = graphql`
    {
        authors: allContentfulAuthors (sort: {fields: name, order: ASC}) {
            nodes {
                name
                photo {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
                id
            }
        }
    }
`

export default About;