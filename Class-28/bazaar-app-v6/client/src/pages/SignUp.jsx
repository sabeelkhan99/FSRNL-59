import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { useRef, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const SignUp = () => {

    const navigate = useNavigate();

    const emailInpRef = useRef();
    const usernameInpRef = useRef();
    const passwordInpRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailInpRef.current.value;
        const username = usernameInpRef.current.value;
        const password = passwordInpRef.current.value;

        axios.post('http://localhost:1234/api/v1/auth/register', { username, email, password })
            .then((res) => {
                console.log(res);
                toast.success(res.data?.message, {position: 'top-center'});
                navigate('/login');
            })
            .catch((err) => {
                toast.error(err.response?.data?.message, {position: 'top-center'});
            });
    };


    return (
        <Container component="main" maxWidth="md">
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
                    Create Account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="email"
                        name="email"
                        inputRef={emailInpRef}
                    />
                    {/* <RadioGroup
                        aria-labelledby="radio-buttons-group-label"
                        name="role"
                    >
                        <FormControlLabel value="seller" control={<Radio />} label="Seller" />
                        <FormControlLabel value="buyer" control={<Radio />} label="Buyer" />
                    </RadioGroup> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;