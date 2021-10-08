import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import FeaturedPosts from '../components/FeaturedPosts';
import LastPosts from '../components/LastPosts';
import AmazonWidget from '../components/AmazonWidget';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#ede7f6',
        height: '40vh'
    },
    headerContainer: {
        padding: 0,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: '4rem',
        marginBottom: '1rem'
    },
    mainContainer: {
        marginTop: '-7rem',
        marginBottom: '3rem'
    }
}));

const Category = ({ data }) => {
    const classes = useStyles();
    const { name, description } = data.category;
    const { featuredPosts, lastPosts } = data;

    return (
        <Layout>
            <header className={classes.header}>
                <Container maxWidth='lg' className={classes.headerContainer}>
                    <Typography variant='h1' color='textPrimary' className={classes.title}>{name}</Typography>
                    <Typography variant='h5' color='textPrimary'>{description}</Typography>
                </Container>
            </header>
            <main>
                <Container maxWidth='lg' className={classes.mainContainer}>
                    <FeaturedPosts posts={featuredPosts} />
                    <Grid container spacing={2}>
                        <LastPosts posts={lastPosts} />
                        <Grid item sm={4}>
                            <AmazonWidget />
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </Layout>
    );
};

export const query = graphql`
    query getCategory($id: String) {
        category: contentfulCategories(id: {eq: $id}) {
            name
            description
        }
        featuredPosts: allContentfulHealthBlogPosts(
            filter: {featured: {eq: true}, category: {id: {eq: $id}}}
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
            filter: {category: {id: {eq: $id}}}
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

export default Category;