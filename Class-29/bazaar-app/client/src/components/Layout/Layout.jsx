import React, { Fragment } from 'react';
import Navbar from '../Navbar/NavBar';
import { Box } from '@mui/material';
import { Toaster } from 'react-hot-toast';

const Layout = (props) => {
    return (
        <Fragment>
            <header>
                <Navbar />
            </header>
            <main>
                 <Toaster />
                <Box mt={8}>
                    {props.children}
                </Box>
            </main>
            <footer>

            </footer>
        </Fragment>
    )
}

export default Layout
