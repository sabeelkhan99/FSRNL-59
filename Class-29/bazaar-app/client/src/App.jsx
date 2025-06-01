import './App.css';
import { Routes, Route } from 'react-router';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './components/Layout/Layout';
import Cart from './pages/Cart';
import ShowProduct from './pages/ShowProduct';
import PrivateRoutes from './components/PrivateRoute/PrivateRoutes';
import { useContext } from 'react';
import UserContext from './store/user-context';
import NewProductForm from './components/NewProductForm/NewProductForm';

function App() {

    const { isAuthenticated } = useContext(UserContext);
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllProducts />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/cart' element={<Cart />} />
                <Route element={<PrivateRoutes isAuthenticated={isAuthenticated} />} >
                    <Route path='/new' element={<NewProductForm />} />
                    <Route path='/products/:productId' element={<ShowProduct />} />
                </Route>
            </Routes>
        </Layout>
    )
}

export default App
