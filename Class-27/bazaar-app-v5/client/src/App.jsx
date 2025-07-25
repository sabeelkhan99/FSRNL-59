import './App.css';
import { Routes, Route } from 'react-router';
import AllProducts from './pages/AllProducts';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Layout from './components/Layout/Layout';
import Cart from './pages/Cart';
import ShowProduct from './pages/ShowProduct';

function App() {

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<AllProducts />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<SignUp />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/products/:productId' element={ <ShowProduct/> } />
            </Routes>
        </Layout>
    )
}

export default App
