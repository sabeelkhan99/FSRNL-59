import { Fragment, useEffect, useState } from 'react'
import ProductList from '../components/ProductList/ProductList';
import Banner from '../components/Banner/Banner';
import { Box } from '@mui/material';

const AllProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(() => data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);


    return (
        <Fragment>
            <Banner />
            <Box mt={5}>
                {products.length === 0 ? <p>Loading Products...</p> : <ProductList products={products} />}
            </Box>
        </Fragment>
    )
}

export default AllProducts
