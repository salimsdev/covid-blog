import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    message: {
        padding: '10px 0',
        color: '#fff'
    },
    action: {
        paddingLeft: 0
    }
});

const AlertBar = ({ error, message }) => {
    const [open, setOpen] = useState(true);
    const classes = useStyles();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} 
                onClose={handleClose} TransitionComponent={Slide}
            >
                <SnackbarContent 
                    classes={{
                        message: classes.message,
                        action: classes.action
                    }}
                    style={{backgroundColor: message ? '#9575cd' : '#ff0033'}}
                    message={error || message}
                    action={
                        <Button onClick={handleClose} aria-label="fermer" style={{ color: '#fff' }}>OK</Button>
                    } 
                />
            </Snackbar>
        </div>
    );
};

export default AlertBar;