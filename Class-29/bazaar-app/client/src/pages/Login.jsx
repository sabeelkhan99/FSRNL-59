import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router';
import { useRef } from 'react';
import UserContext from '../store/user-context';
import { useContext } from 'react';

const Login = () => {

    const usernameInpRef = useRef();
    const passwordInpRef = useRef();
    const userContext = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = usernameInpRef.current.value;
        const password = passwordInpRef.current.value;
        userContext.login(username, password);
        
    };

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AddCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        inputRef={usernameInpRef}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="password"
                        name="password"
                        type="password"
                        inputRef={passwordInpRef}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Typography component={Link} to="/register">Don't have an account ? Register</Typography>
                </Box>
            </Box>
        </Container>
    );
}

export default Login;