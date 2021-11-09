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
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: '1rem',
            transition: 'color 200ms ease-in-out',
            '&:hover': {
                color: theme.palette.primary.light
            }
        }
    },
    menuList: {
        paddingBottom: 0
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
        padding: '1.5rem 2rem',
        '& svg': {
            display: 'flex',
            alignItems: 'center'
        }
    }
}));

const activeStyle = {
    borderRadius: '9px 9px 0px 0px',
    borderBottom: '0.25rem solid #d1c4e9',
    marginBottom: '-0.1rem',
    paddingBottom: '0.5rem',
    paddingTop: '0.7rem'
};

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
        <AppBar position="sticky" color='inherit'>
            <Toolbar className={classes.bar}>
                <Link to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className={classes.menu}>
                    <Button size="small" to='/sante' activeStyle={activeStyle}>Santé</Button>
                    <Button size="small" to='/bien-etre' activeStyle={activeStyle}>Bien-être</Button>
                    <Button size="small" to='/fitness' activeStyle={activeStyle}>Fitness</Button>
                    <Button size="small" to='/nutrition' activeStyle={activeStyle}>Nutrition</Button>
                    <Button size="small" to='/beaute' activeStyle={activeStyle}>Beauté</Button>
                </div>
                <div className={classes.socials}>
                    <a href='https://www.facebook.com/metasante' target='_blank' rel="noreferrer" aria-label='lien facebook'><FacebookIcon color='primary' fontSize='small' /></a>
                    <a href='https://www.instagram.com/metasante' target='_blank' rel="noreferrer" aria-label='lien instagram'><InstagramIcon color='primary' fontSize='small' /></a>
                    <a href='https://twitter.com/MetaSante' target='_blank' rel="noreferrer" aria-label='lien twitter'><TwitterIcon color='primary' fontSize='small' /></a>
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
                        classes={{list: classes.menuList}}
                    >
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='/sante'>
                            <IconButton edge='start'><FavoriteIcon color='primary' /></IconButton>
                            <Typography>Santé</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='/bien-etre'>
                            <IconButton edge='start'><EmojiEmotionsIcon color='primary' /></IconButton>
                            <Typography>Bien-être</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='/fitness'>
                            <IconButton edge='start'><DirectionsRunIcon color='primary' /></IconButton>
                            <Typography>Fitness</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='/nutrition'>
                            <IconButton edge='start'><FastfoodIcon color='primary' /></IconButton>
                            <Typography>Nutrition</Typography>
                        </MenuItem>
                        <MenuItem className={classes.mobileMenuItem} onClick={handleClose} component={Link} to='/beaute'>
                            <IconButton edge='start'><FaceIcon color='primary' /></IconButton>
                            <Typography>Beauté</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem className={classes.mobileSocials}>
                            <a href='https://www.facebook.com/metasante' target='_blank' rel="noreferrer" aria-label='lien facebook'><FacebookIcon color='primary' /></a>
                            <a href='https://www.instagram.com/metasante' target='_blank' rel="noreferrer" aria-label='lien instagram'><InstagramIcon color='primary' /></a>
                            <a href='https://twitter.com/MetaSante' target='_blank' rel="noreferrer" aria-label='lien twitter'><TwitterIcon color='primary' /></a>
                        </MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;