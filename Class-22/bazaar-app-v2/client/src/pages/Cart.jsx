import React from 'react';
import { useContext } from 'react';
import UserContext from '../store/user-context';

const Cart = () => {

    const { cart } = useContext(UserContext);

    // I need all the carts component
    // cart<Product>
  return (
    <div>
          <h1>This is a cart component</h1>
          <ul>
              {
                  cart.map((item) => {
                      return <li>
                          <span>Title: {item.title}</span>
                          <span>Price: { item.price }</span>
                     </li> 
                  })
              }
          </ul>
          <h2>Total Sum : { cart.reduce((totalSum, item)=> totalSum+item.price, 0)}</h2>
    </div>
  )
}

export default Cart;
    