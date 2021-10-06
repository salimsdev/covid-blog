import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        marginBottom: '1rem',
        '&:last-child': {
            marginBottom: 0
        }
    },
    img: {
        flex: 1
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
    category: {
        fontWeight: 500,
        color: theme.palette.primary.main,
        marginBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '0.5rem'
        },
        '& span': {
            color:  'rgba(0,0,0,0.6)',
            marginLeft: '1rem',
            fontSize: '0.75rem'
        }
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
        lineHeight: 1.2
    }
}));

const LastPosts = ({ posts }) => {
    const classes = useStyles();
    const { nodes } = posts;

    return (
        <Grid item sm={8}>
            {nodes.map(({ category, description, title, image, createdAt, author, id }) => {
                const imagePath = getImage(image);
                const avatarImage = getImage(author.photo);
                const date = new Date(createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });

                return (
                    <div className={classes.card} key={id}>
                        <GatsbyImage image={imagePath} alt={title} className={classes.img} />
                        <div className={classes.text}>
                            <Typography variant='subtitle2' className={classes.category}>{category.name.toUpperCase()} <span>{date}</span></Typography>
                            <div className={classes.avatar}>
                                <Avatar>
                                    <GatsbyImage image={avatarImage} alt={author.name} />
                                </Avatar>
                                <Typography>{author.name}</Typography>
                            </div>
                            <Typography variant='body1' color='textPrimary' gutterBottom paragraph className={classes.title}>{title}</Typography>
                            <Typography variant='body2' color='textSecondary'>{description}</Typography>
                        </div>
                    </div>
                );
            })}
        </Grid>
    );
    
};

export default LastPosts;