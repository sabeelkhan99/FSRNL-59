import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Review from '../components/Review/Review';
import toast from 'react-hot-toast';

const ShowProduct = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    function fetchProduct() {
        axios.get(`http://localhost:1234/api/v1/products/${productId}`,
            { headers: { 'Authorization': `Bearer ${window.localStorage.getItem('token')}` } })
            .then((res) => setProduct({ ...res.data }))
            .catch((err) => {
                if (err?.response.status === 401) {
                    toast.error('Please login again to continue');
                    navigate('/login');
                }
                console.log(err)
                setError(err.response?.data?.message);
            });
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!(rating || review)) {
            return;
        }
        // create review api call.
        axios.post(`http://localhost:1234/api/v1/products/${productId}/reviews`, { rating, review })
            .then((res) => {
                fetchProduct();
            })
            .catch((err) => console.log(err));

        // Reset the inputs.
        setRating(() => 0);
        setReview(() => "");
    };

    if (error) {
        return <p>{error}</p>
    }

    return (
        <Box px={10} mt={10}>
            <Grid container spacing={2}>
                <Grid size={{ md: 6, sm: 12 }}>
                    {product ? <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={product.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">
                                ${product.price}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {product.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="contained" color="primary">Add to cart</Button>
                        </CardActions>
                    </Card>
                        : <p>Loading.....</p>}
                </Grid>
                <Grid size={{ md: 6, sm: 12 }}>
                    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mt: '1rem' }}>
                        <Rating
                            name="user-rating"
                            value={rating}
                            onChange={(event, newValue) => setRating(newValue)}
                        />
                        <TextField
                            label="Your Review"
                            multiline
                            rows={3}
                            value={review}
                            onChange={(e) => setReview(e.target.value)}
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </Box>
                    <Box mt={5}>
                        {
                            product && product.reviews.length ?
                                product.reviews.map((item, idx) => {
                                    return <Review key={idx} rating={item.rating} review={item.review} />
                                }) : <p>No reviews yet!</p>
                        }
                    </Box>
                </Grid>
            </Grid>

        </Box>
    )
}

export default ShowProduct
