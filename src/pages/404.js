import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Layout from '../components/Layout';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem auto',
        [theme.breakpoints.down('sm')]: {
            margin: '3rem auto',
            padding: 0
        }
    },
    text: {
        margin: '2rem auto 1rem',
        fontFamily: 'Dancing Script',
        color: '#333'
    }
}));

const Error = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container maxWidth='md' className={classes.container}>
                <StaticImage src='../assets/images/error.jpg' placeholder='blurred' alt='error page' />
                <Typography variant='h3' align='center' className={classes.text}>Désolé, la page que vous recherchez n'existe pas.</Typography>
            </Container>
        </Layout>
    );
};

export default Error;