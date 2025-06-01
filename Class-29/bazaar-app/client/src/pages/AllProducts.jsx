import { Fragment, useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import Banner from '../components/Banner/Banner';
import { Box } from '@mui/material';
import axios from 'axios';

const BACKEND_BASE_URL = import.meta.env.VITE_API_BACKEND_BASE_URL;

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${BACKEND_BASE_URL}/api/v1/products`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err.message));
    }, []);


    return (
        <Box>
            <Banner />
            <Box mt={5} mx={10}>
                {products.length === 0 ? <p>No products Availabe</p> : <ProductList products={products} />}
            </Box>
        </Box>
    )
}

export default AllProducts
