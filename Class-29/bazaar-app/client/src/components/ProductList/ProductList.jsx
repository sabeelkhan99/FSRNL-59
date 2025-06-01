import React from 'react'
import Product from '../Product/Product'
import Grid from '@mui/material/Grid';

const ProductList = ({ products }) => {
    return (
        <Grid container spacing={2}>
            {
                products.map((product) => {
                    return (
                        <Grid size={3} key={product._id}>
                            <Product
                                id={product._id}
                                title={product.title}
                                image={product.image}
                                description={product.description}
                                price={product.price}
                            />
                        </Grid>)
                })
            }
        </Grid>
    )
}

export default ProductList
