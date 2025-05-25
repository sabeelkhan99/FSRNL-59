import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const Product = (props) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 170 }}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {props.title}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    ${props.price}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant='contained' color='primary' component={Link} to={`/products/${props.id}`}>Show</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default Product;
