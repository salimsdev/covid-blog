import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import CopyrightIcon from '@material-ui/icons/Copyright';
import Typography from '@material-ui/core/Typography';
import { Link, IconButton } from 'gatsby-theme-material-ui';

const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.primary.light,
        padding: '2rem 0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.8rem',
        '& a': {
            color: '#fff',
            textDecoration: 'none !important',
            marginRight: '1rem',
            '&:hover': {
                color: theme.palette.primary.main
            }
        },
        '& h6': {
            fontSize: '1rem',
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.75rem'
            }
        }
    },
    copyright: {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        marginTop: '1rem'
    },
    copyrightIcon: {
        marginRight: '0.5rem'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <div>
                <IconButton><FacebookIcon color='primary' fontSize='large' /></IconButton>
                <IconButton><InstagramIcon color='primary' fontSize='large' /></IconButton>
                <IconButton><TwitterIcon color='primary' fontSize='large' /></IconButton>
            </div>
            <div className={classes.links}>
                <Link to='#'><Typography variant='h6'>A PROPOS</Typography></Link>
                <Link to='#'><Typography variant='h6'>CONTACT</Typography></Link>
                <Link to='#'><Typography variant='h6'>CONFIDENTIALITE</Typography></Link>
                <Link to='#'><Typography variant='h6'>POLITIQUE</Typography></Link>
            </div>
            <Typography className={classes.copyright}><CopyrightIcon className={classes.copyrightIcon} color='primary' fontSize='small' />Se Soigner - 2021</Typography>
        </footer>
    );
};

export default Footer;