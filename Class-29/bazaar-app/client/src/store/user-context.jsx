import { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';

const BACKEND_BASE_URL = import.meta.env.VITE_API_BACKEND_BASE_URL;

const UserContext = createContext({
    cart: [],
    cartLength: 0,
    isAuthenticated: false,
    login: () => { },
    logout: () => { },
    user: null,
});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    // Mock cart (can replace with backend fetch)
    const cart = useMemo(() => [
        { id: 1, title: 'Macbook Air', price: 100 },
        { id: 2, title: 'IPad', price: 200 },
        { id: 3, title: 'Mac Mini', price: 300 },
        { id: 4, title: 'New iMac', price: 699 },
    ], []);

    const getToken = () => localStorage.getItem('token');
    const setToken = (token) => localStorage.setItem('token', token);
    const clearToken = () => localStorage.removeItem('token');

    const fetchProfile = async () => {
        const token = getToken();
        if (!token) return;

        try {
            const res = await axios.get(`${BACKEND_BASE_URL}/api/v1/auth/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Profile fetch failed:', error);
            clearToken();
            setIsAuthenticated(false);
            setUser(null);
        }
    };

    const login = async (username, password) => {
        try {
            const res = await axios.post(`${BACKEND_BASE_URL}/api/v1/auth/login`, { username, password });
            toast.success('Logged In Successfully', { position: 'top-center' });
            setToken(res.data.token);
            await fetchProfile();
            navigate('/');
        } catch (err) {
            const message = err?.response?.data?.message || 'Login failed';
            toast.error(message, { position: 'top-center' });
        }
    };

    const logout = () => {
        clearToken();
        setIsAuthenticated(false);
        setUser(null);
        toast.success('Logged Out Successfully', { position: 'top-center' });
        navigate('/login');
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const contextValue = useMemo(() => ({
        cart,
        cartLength: cart.length,
        isAuthenticated,
        login,
        logout,
        user,
    }), [cart, isAuthenticated, user]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
