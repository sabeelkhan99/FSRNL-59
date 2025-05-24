import { Fragment, useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import Banner from '../components/Banner/Banner';
import { Box } from '@mui/material';
import axios from 'axios';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1234/api/v1/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err.message));
    }, []);


    return (
        <Box>
            <Banner />
            <Box mt={5} mx={10}>
                {products.length === 0 ? <p>Loading Products...</p> : <ProductList products={products} />}
            </Box>
        </Box>
    )
}

export default AllProducts
