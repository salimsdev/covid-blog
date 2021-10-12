import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginBottom: '1rem',
        '&:last-child': {
            marginBottom: 0
        },
        '& a': {
            '&:hover': {
                textDecoration: 'none'
            }
        }
    },
    img: {
        flex: 1,
        transition: 'opacity 500ms ease-in-out',
        '&:hover': {
            opacity: 0.7
        }
    },
    text: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '0 1rem',
        [theme.breakpoints.down('xs')]: {
            paddingRight: '0.2rem'
        }
    },
    textHead: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.5rem'
        },
    },
    category: {
        fontWeight: 500,
        color: theme.palette.primary.main,
        transition: 'color 200ms ease-in-out',
        '&:hover': {
            color: theme.palette.primary.light
        }
    },
    date: {
        color:  'rgba(0,0,0,0.6)',
        marginLeft: '1rem',
        fontSize: '0.75rem'
    },
    avatar: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        '& p': {
            marginLeft: '0.5rem',
            fontSize: '0.8rem'
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

const LastPosts = ({ posts }) => {
    const classes = useStyles();
    const { nodes } = posts;

    return (
        <Grid item sm={8}>
            {nodes.map(({ category, description, title, image, date, author, slug, id }) => {
                const imagePath = getImage(image);
                const avatarImage = getImage(author.photo);
                const sluggedCategory = category.name.toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "");
                const formattedDate = new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });

                return (
                    <div className={classes.card} key={id}>
                        <Link to={`/${sluggedCategory}/${slug}`} className={classes.img}><GatsbyImage image={imagePath} alt={title} /></Link>
                        <div className={classes.text}>
                            <div className={classes.textHead}>
                                <Link to={`/${sluggedCategory}`}><Typography variant='subtitle2' className={classes.category}>{category.name.toUpperCase()}</Typography></Link>
                                <div className={classes.date}>{formattedDate}</div>
                            </div>
                            <div className={classes.avatar}>
                                <Avatar>
                                    <GatsbyImage image={avatarImage} alt={author.name} />
                                </Avatar>
                                <Typography>{author.name}</Typography>
                            </div>
                            <Link to={`/${sluggedCategory}/${slug}`}><Typography variant='body1' color='textPrimary' gutterBottom paragraph className={classes.title}>{title}</Typography></Link>
                            <Typography variant='body2' color='textSecondary'>{description}</Typography>
                        </div>
                    </div>
                );
            })}
        </Grid>
    );
    
};

export default LastPosts;