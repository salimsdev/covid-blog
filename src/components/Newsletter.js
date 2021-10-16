import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AlertBar from './Alertbar';

const useStyles = makeStyles(theme => ({
    container: {
        padding: 0,
        display: 'flex',
        margin: '0 auto 3rem'
    },
    img:{
        flex: 1,
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    cta: {
        backgroundColor: '#d1c4e9',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '1rem 0'
        }
    },
    title: {
        color: '#000',
        fontFamily: 'Dancing Script',
        fontSize: '1.5rem',
        fontWeight: 500,
        padding: '0 0.5rem'
    },
    fields: {
        margin: '1.5rem 0',
        display: 'flex',
        justifyContent: 'center'
    },
    field: {
        margin: '0 0.5rem'
    }
}));

const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const classes = useStyles();

    const onSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        const response = await addToMailchimp(email, { LNAME: name });
        setResult(response.result);
        setLoading(false);
        console.log(response);
    };

    return (
        <Container maxWidth='lg' className={classes.container}>
            {result === 'success' && <AlertBar message="Votre inscription a bien été enregistrée. Merci." />}
            {result === 'error' && <AlertBar error="Une erreur s'est produite. Merci de réessayer." />}
            <section className={classes.img}>
                <StaticImage src='../assets/images/newsletter.jpg' layout='constrained' placeholder='blurred' alt='wellness' />
            </section>
            <section className={classes.cta}>
                <Typography variant='body1' align='center' className={classes.title}>Recevez en avant-première nos conseils, astuces et bons plans bien-être</Typography>
                <div className={classes.fields}>
                    <TextField variant='filled' color='primary' label="Prénom" type="text" name='name' margin='dense' value={name} onChange={e => setName(e.target.value)} placeholder='Entrez votre prénom' required className={classes.field} />
                    <TextField variant='filled' color='primary' label="Email" type="email" name='email' margin='dense' value={email} onChange={e => setEmail(e.target.value)} placeholder='Entrez votre email' required className={classes.field} />
                </div>
                <Button variant='outlined' color='primary' onClick={onSubmit} disabled={loading ? true : false}>s'inscrire</Button>
            </section>
        </Container>
    );
};

export default Newsletter;