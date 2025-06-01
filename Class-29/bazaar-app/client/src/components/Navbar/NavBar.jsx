import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import UserContext from '../../store/user-context';

const drawerWidth = 240;

const Navbar = (props) => {

    const { cart, cartLength, isAuthenticated, logout, user } = useContext(UserContext);

    console.log(isAuthenticated);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Products' />
                    </ListItemButton>
                </ListItem>
                {!isAuthenticated && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/login" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Login' />
                    </ListItemButton>
                </ListItem>}
                {!isAuthenticated && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/register" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='SignUp' />
                    </ListItemButton>
                </ListItem>}
                {isAuthenticated && <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/new" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='Add Products' />
                    </ListItemButton>
                </ListItem>}
                <ListItem disablePadding>
                    <ListItemButton component={NavLink} to="/cart" sx={{ textAlign: 'center' }}>
                        <ListItemText primary='MyCart' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', color: 'secondary'}}>
            <CssBaseline />
            <AppBar component="nav" color={`${user && user.role ==='SELLER' ? 'secondary': 'primary'}`}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button
                        variant="h4"
                        component={NavLink}
                        to="/"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Bazaar
                    </Button>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {isAuthenticated && <Button component={NavLink} to="/login" sx={{ color: '#fff' }}>
                            {user && user.username}
                        </Button>}
                        <Button component={NavLink} to="/" sx={{ color: '#fff' }}>
                            Products
                        </Button>

                        {!isAuthenticated && <Button component={NavLink} to="/login" sx={{ color: '#fff' }}>
                            Login
                        </Button>}
                        {!isAuthenticated && <Button component={NavLink} to="/register" sx={{ color: '#fff' }}>
                            SignUp
                        </Button>}
                        {isAuthenticated && <Button onClick={() => logout()} sx={{ color: '#fff' }}>
                            Logout
                        </Button>}
                        {isAuthenticated && user && user.role==='SELLER' && <Button component={NavLink} to="/new" sx={{ color: '#fff' }}>
                            Add Products
                        </Button>}
                        <Button component={NavLink} to="/cart" sx={{ color: 'white' }}>
                            <Badge badgeContent={cartLength} color="secondary">
                                <ShoppingCartIcon color="action" />
                            </Badge>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Navbar;
