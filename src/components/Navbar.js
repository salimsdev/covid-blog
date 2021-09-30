import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import FaceIcon from '@material-ui/icons/Face';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link, Button, IconButton } from 'gatsby-theme-material-ui';
import logo from '../assets/images/logo.png';

const useStyles = makeStyles(theme => ({
    bar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    menu: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            '& a': {
                color: '#555',
                padding: '1rem 1.5rem'
            }
        },
    },
    socials: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: 'center'
        },
        '& svg': {
            cursor: 'pointer',
            marginRight: '1rem',
            '&:hover': {
                color: theme.palette.primary.light
            }
        }
    },
    mobileMenu: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    mobileMenuItem: {
        display: 'flex', 
        padding: '0.5rem 3rem', 
        justifyContent: 'flex-start', 
        textDecoration: 'none !important',
        '& p': {
            fontWeight: 500,
            color: '#666'
        }
    },
    mobileSocials: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem 2rem'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" color='inherit'>
            <Toolbar className={classes.bar}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className={classes.menu}>
                    <Button size="small" to='#'>Santé</Button>
                    <Button size="small" to='#'>Bien-être</Button>
                    <Button size="small" to='#'>Fitness</Button>
                    <Button size="small" to='#'>Nutrition</Button>
                    <Button size="small" to='#'>Beauté</Button>
                </div>
                <div className={classes.socials}>
                    <FacebookIcon color='primary' fontSize='small' />
                    <InstagramIcon color='primary' fontSize='small' />
                    <TwitterIcon color='primary' fontSize='small' />
                </div>
                <div className={classes.mobileMenu}>
                    <IconButton color='primary' onClick={handleMenu} aria-controls="menu-principal" aria-haspopup="true">
                        <MenuIcon />
                    </IconButton>
                    <Menu 
                        anchorEl={anchorEl}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        getContentAnchorEl={null} keepMounted id="menu-principal"
                        open={Boolean(anchorEl)} onClose={handleClose}
                    >
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='#'>
                            <IconButton edge='start'><FavoriteIcon color='primary' /></IconButton>
                            <Typography>Santé</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='#'>
                            <IconButton edge='start'><EmojiEmotionsIcon color='primary' /></IconButton>
                            <Typography>Bien-être</Typography>                     
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='#'>
                            <IconButton edge='start'><DirectionsRunIcon color='primary' /></IconButton>
                            <Typography>Fitness</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='#'>
                            <IconButton edge='start'><FastfoodIcon color='primary' /></IconButton>
                            <Typography>Nutrition</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='#'>
                            <IconButton edge='start'><FaceIcon color='primary' /></IconButton>
                            <Typography>Beauté</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem className={classes.mobileSocials}>
                            <FacebookIcon color='primary' />
                            <InstagramIcon color='primary' />
                            <TwitterIcon color='primary' />
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;