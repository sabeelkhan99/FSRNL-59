import React, {useState} from 'react';
import "./Product.css";

const Product = (props) => {

    const [title, setTitle] = useState(props.title);

    const productClickHandler = () => {
        // setTitle('Anoymous');
        setTitle(()=> 'Anoymous');
    }

    return (
        <figure className="product" onClick={productClickHandler}>
            <img src={props.image} alt="" />
            <figcaption>
                <h3>{title}</h3>
                <h3>$ { props.price }</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button>Buy Now</button>
            </figcaption>
        </figure>
    )
}

export default Product;
