import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const UserContext = createContext({
    cart: [],
    cartLength: 0,
    isAuthenticated: false,
    login: () => { },
    user: null,
    logout: ()=>{}
});

export const UserContextProvider = (props) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // fetch
    // grab the user cart
    const cart = [
        {
            id: 1,
            title: "Macbook Air",
            price: 100
        },
        {
            id: 2,
            title: "IPad",
            price: 200
        },
        {
            id: 3,
            title: "Mac Mini",
            price: 300
        },
        {
            id: 4,
            title: "New iMac",
            price: 699
        }
    ]

     const fetchProfile = () => {
        const token = window.localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        axios.get('http://localhost:1234/api/v1/auth/profile', { headers: { 'Authorization': `Bearer ${token}` } })
            .then((res) => {
                console.log(res.data);
                setIsAuthenticated(true);
                setUser(res.data);
                navigate('/');
            })
            .catch((err) => {
                toast.error('Please login to continue', { position: 'top-center' });
                navigate('/login');
            });
    }

   

    const login = (username, password) => {
        axios.post('http://localhost:1234/api/v1/auth/login', { username, password })
            .then((res) => {
                toast.success('Logged In Successfully', { position: 'top-center' });
                setIsAuthenticated(true);
                window.localStorage.setItem('token', res.data.token);
                fetchProfile();
                navigate('/');
            })
            .catch((err) => {
                toast.error(err.response?.data?.message, { position: 'top-center' });
            });
    }

    const logout = () => {
        window.localStorage.removeItem('token');
        setIsAuthenticated(false);
        setUser(null);
        toast.success('Logged Out Successfully');
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    const context = {
        cart: cart,
        cartLength: cart.length,
        login,
        isAuthenticated,
        logout,
        user
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;
