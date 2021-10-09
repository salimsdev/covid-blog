import React from 'react';
import { graphql } from 'gatsby';
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
import AmazonWidget from '../components/AmazonWidget';

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
  headline: {
    fontFamily: 'Dancing Script',
    fontSize: '3rem',
    marginTop: '1rem'
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

const Home = ({ data }) => {
    const classes = useStyles();
    const { featuredPosts, lastPosts } = data;
    
    return (
        <Layout>
            <header className={classes.header}>
                <Container maxWidth='xl' className={classes.containerHeader}>
                    <div className={classes.left}>
                        <StaticImage src='../assets/images/header.jpg' alt='landscape' className={classes.img} placeholder='blurred' />
                        <div className={classes.text}>
                            <Typography variant='h1' align='center'>Santé et Bien-être</Typography>
                            <Typography variant='h4' align='center' gutterBottom>Apprenez à vous soigner Naturellement et retrouvez Bien-être, Energie et Confiance.</Typography>
                            <Typography variant='h4' align='center' className={classes.headline}>Vous n'êtes pas seul</Typography>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <StaticImage src='../assets/images/yoga-portrait.jpg' alt='slider' className={classes.img} placeholder='blurred' />
                    </div>
                </Container>
            </header>            
            <FeaturedPosts posts={featuredPosts} />
            <section>
                <Container maxWidth='lg' className={classes.containerLower}>
                    <Grid container spacing={2}>
                        <LastPosts posts={lastPosts} />
                        <Grid item sm={4}>
                            <AmazonWidget />
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <Container maxWidth='sm'><Divider /></Container>
            <CategoriesCards />
        </Layout>
    );
};

export const query = graphql`
  {
    featuredPosts: allContentfulHealthBlogPosts(
      filter: {featured: {eq: true}}
      sort: {fields: date, order: DESC}
      limit: 3
    ) {
      nodes {
        category {
          name
        }
        description
        id
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        slug
      }
    }
    lastPosts: allContentfulHealthBlogPosts(
      sort: {fields: date, order: DESC}
      limit: 5
    ) {
      nodes {
        category {
          name
        }
        description
        id
        title
        date
        author {
          name
          photo {
            gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
          }
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
        slug
      }
    }
  }
`

export default Home;
