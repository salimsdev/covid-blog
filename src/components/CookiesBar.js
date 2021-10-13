import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Snackbar from '@material-ui/core/Snackbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import { Link } from 'gatsby-material-ui-components';

const useStyles = makeStyles(theme => ({
    root: {
        '& div': {
            backgroundColor: theme.palette.primary.main
        }
    },
    link: {
        color: '#fff',
        textDecoration: 'underline'
    },
    btn: {
        color: '#fff'
    }
}));

const CookiesBar = () => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const message = 
            <Typography variant='body2'>
                Ce site utilise des cookies pour vous offrir un service de qualité et analyser le traffic. En continuant à utiliser ce site, vous acceptez notre <Link to='/politique' className={classes.link}>politique relative aux cookies</Link>
            </Typography>;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setOpen(false);
    };

    return (
        <Snackbar
            classes={{root: classes.root}}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={8000}
            onClose={handleClose}
            TransitionComponent={Slide}
            message={message}
            action={
                <React.Fragment>
                    <Button className={classes.btn} size="small" onClick={handleClose}>
                        OK
                    </Button>
                </React.Fragment>
            }
        />
    );
};

export default CookiesBar;