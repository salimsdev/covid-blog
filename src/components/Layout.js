import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../assets/utils/theme';

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;