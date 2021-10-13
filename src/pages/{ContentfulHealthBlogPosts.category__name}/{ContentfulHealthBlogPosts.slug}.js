import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'gatsby-theme-material-ui';
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types";
import Layout from '../../components/Layout';
import AmazonWidget from '../../components/AmazonWidget';
import FeaturedPosts from '../../components/FeaturedPosts';
import Seo from '../../components/Seo';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0
    },
    header: {
        margin: '3rem auto',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '1rem auto'
        }
    },
    textHeader: {
        padding: '1rem',
        flex: 0.4,
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
    category: {
        fontWeight: 500,
        color: '#673ab7',
        marginBottom: '1rem',
        transition: 'color 200ms ease-in-out',
        '&:hover': {
            color: '#9575cd'
        }
    },
    img: {
        flex: 0.6
    },
    title: {
        fontFamily: 'Dancing Script',
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '1rem'
    },
    subtitle: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        '& p': {
            marginLeft: '0.75rem',
            fontSize: '0.95rem',
            color: 'rgba(0,0,0,0.7)',
            letterSpacing: 0.2
        }
    },
    author: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '0.75rem'
    },
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
    },
    social: {
        '& a': {
            margin: '0 0.3rem',
            transition: 'color 200ms ease-in-out',
            '&:first-child': {
                color: 'rgba(66,103,178,1)',
                '&:hover': {
                    color: 'rgba(66,103,178,0.7)'
                }
            },
            '&:last-child': {
                color: 'rgba(29,161,242,1)',
                '&:hover': {
                    color: 'rgba(29,161,242,0.7)'
                }
            }
        }
    },
    main: {
        marginBottom: '1rem',
        padding: '1rem 0',
        [theme.breakpoints.down('sm')]: {
            padding: 0
        }
    },
    article: {
        padding: '1rem',
        paddingRight: '5rem',
        [theme.breakpoints.down('sm')]: {
            padding: '1rem'
        }
    },
    share: {
        display: 'flex',
        justifyContent: 'center',
        '& a': {
            margin: '0 0.3rem',
            transition: 'color 200ms ease-in-out',
            '&:first-child': {
                color: 'rgba(66,103,178,1)',
                '&:hover': {
                    color: 'rgba(66,103,178,0.7)'
                }
            },
            '&:last-child': {
                color: 'rgba(29,161,242,1)',
                '&:hover': {
                    color: 'rgba(29,161,242,0.7)'
                }
            }
        }
    },
    p: {
        marginBottom: '2rem'
    },
    li: {
        '& p': {
            marginBottom: '0.5rem !important'
        },
        '&:first-child': {
            marginTop: '-1rem'
        },
        '&:last-child': {
            marginBottom: '2rem'
        }
    },
    h2: {
        fontWeight: 500,
        paddingTop: '1.2rem'
    },
    h3: {
        fontWeight: 500,
        fontSize: '1rem'
    }
}));

const options = {
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: node => {
            const { gatsbyImageData, title } = node.data.target;
            if (!gatsbyImageData) return null;
            return <GatsbyImage image={gatsbyImageData} alt={title} />
        },
        [BLOCKS.PARAGRAPH]: (node, children) => {
            const classes = useStyles();
            return <Typography variant='body1' color='textPrimary' className={classes.p}>{children}</Typography>
        },
        [BLOCKS.LIST_ITEM]: (node, children) => {
            const classes = useStyles();
            return <li className={classes.li}>{children}</li>
        },
        [BLOCKS.HEADING_2]: (node, children) => {
            const classes = useStyles();
            return <h2 className={classes.h2}>{children}</h2>
        },
        [BLOCKS.HEADING_3]: (node, children) => {
            const classes = useStyles();
            return <h3 className={classes.h3}>{children}</h3>
        }
    }
};

const BlogPost = ({ data }) => {
    const classes = useStyles();
    const { title, description, image, content, author, category, date } = data.post;
    const imagePath = getImage(image);
    const avatarImage = getImage(author.photo);
    const formattedDate = new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
    const sluggedCategory = category.name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
    const featuredPosts = data.featuredPosts;

    return (
        <Layout>
            <Seo title={title} description={description} isBlogPost={true} />
            <Container maxWidth='lg' className={classes.container}>
                <header className={classes.header}>
                    <section className={classes.textHeader}>
                        <Link to={`/${sluggedCategory}`}><Typography variant='subtitle2' align='center' className={classes.category}>{category.name.toUpperCase()}</Typography></Link>
                        <Typography variant='h1' align='center' className={classes.title}>{title}</Typography>
                        <div className={classes.subtitle}>
                            <div className={classes.author}>
                                <Avatar className={classes.avatar}>
                                    <GatsbyImage image={avatarImage} alt={author.name} />
                                </Avatar>
                                <Typography>{author.name}</Typography>
                            </div>
                            <span>&#x25cf;</span>
                            <Typography>{formattedDate}</Typography>
                        </div>
                        <div className={classes.social}>
                            <Tooltip title='Partager sur Facebook' arrow><Link to='#'><FacebookIcon /></Link></Tooltip>
                            <Tooltip title='Partager sur Twitter' arrow><Link to="#"><TwitterIcon /></Link></Tooltip>
                        </div>
                    </section>
                    <GatsbyImage image={imagePath} alt={title} className={classes.img} />
                </header>
                <main className={classes.main}>
                    <Grid container>
                        <Grid item md={8} className={classes.article}>
                            {renderRichText(content, options)}
                            <div className={classes.share}>
                            <Tooltip title='Partager sur Facebook' arrow><Link to='#'><FacebookIcon fontSize='large' /></Link></Tooltip>
                            <Tooltip title='Partager sur Twitter' arrow><Link to="#"><TwitterIcon fontSize='large' /></Link></Tooltip>
                            </div>
                        </Grid>
                        <Grid item md={4} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <AmazonWidget />
                        </Grid>
                    </Grid>
                </main>
                <FeaturedPosts posts={featuredPosts} />
            </Container>
        </Layout>
    );
};

export const query = graphql`
    query getPost($id: String) {
        post: contentfulHealthBlogPosts(id: {eq: $id}) {
            title
            description
            image {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
            content {
                raw
                references {
                    ... on ContentfulAsset {
                        contentful_id
                        __typename
                        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                    }
                    title
                }
            }
            author {
                name
                photo {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
                }
            }
            category {
                name
            }
            date
        }
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
    }
`

export default BlogPost;