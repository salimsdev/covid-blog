import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { StaticImage } from 'gatsby-plugin-image';

const useStyles = makeStyles(theme => ({
    container: {
        margin:'0 auto 4rem',
        padding: '0 4rem'
    },
    title: {
        fontFamily: 'Dancing Script',
        marginBottom: '2rem'
    },
    img: {
        height: '65vh',
        marginBottom: '4rem'
    },
    text: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        marginTop: '1rem'
    }
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Seo title='Contact' isBlogPost={false} />
            <Container maxWidth='lg' className={classes.container}>
                <StaticImage src='../assets/images/contact.jpg' alt='hello' placeholder='blurred' layout='constrained' className={classes.img} />
                <Grid container spacing={6}>
                    <Grid item sm={5} className={classes.text}>
                        <Typography variant='h3' color='textPrimary' className={classes.title} align='center'>Nous contacter</Typography>
                        <Typography variant='body1' color='textPrimary'>
                            Vous avez des questions, des requêtes, un problème technique ou vous souhaitez simplement nous envoyer un message? N'hésitez pas à nous en faire part en utilisant le formulaire.
                        </Typography>
                    </Grid>
                    <Grid item sm={7}>
                        <form name='contact' method='POST' data-netlify='true' data-netlify-honeypot="bot-field">
                            <input type='hidden' name='form-name' value='contact' />
                            <TextField variant='outlined' label="Prénom" type="text" name='name' fullWidth margin='normal' placeholder='Entrez votre prénom' required />
                            <TextField variant='outlined' label="Email" type="email" name='email' fullWidth margin='normal' placeholder='Entrez votre email' required />
                            <TextField variant='outlined' label="Message" name="message" fullWidth multiline={true} margin='normal' placeholder='Entrez votre message' required minRows={3} />
                            <Button type='submit' fullWidth variant='outlined' color='primary' className={classes.btn}>envoyer</Button>
                        </form>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
};

export default Contact;