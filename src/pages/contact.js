import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Layout from '../components/Layout';

const useStyles = makeStyles(theme => ({

}));

const Contact = () => {
    const classes = useStyles();

    return (
        <Layout>
            <Container>
                Contact
            </Container>
        </Layout>
    );
};

export default Contact;