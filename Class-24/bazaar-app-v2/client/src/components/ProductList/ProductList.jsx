import React from 'react'
import Product from '../Product/Product'
import Grid from '@mui/material/Grid';

const ProductList = ({ products }) => {
    return (
        <Grid container spacing={2}>
            {
                products.map((product) => {
                    return (
                        <Grid size={3} key={product.id}>
                            <Product
                                key={product.id}
                                id={product.id}
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
