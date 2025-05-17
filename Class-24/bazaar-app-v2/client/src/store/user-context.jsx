import React, { createContext } from 'react';

const UserContext = createContext({
    cart: [],
    cartLength: 0
});

export const UserContextProvider = (props) => {

    // fetch
    // grab the user cart
    const cart = [
        {
            id: 1,
            title: "Macbook Air",
            price: 100
        },
        {
            id: 2,
            title: "IPad",
            price: 200
        },
        {
            id: 3,
            title: "Mac Mini",
            price: 300
        },
        {
            id: 4,
            title: "New iMac",
            price: 699
        }
    ]

    const context = {
        cart: cart,
        cartLength: cart.length
    }

    return (
        <UserContext.Provider value={context}>
                {props.children}
        </UserContext.Provider>
    )
}

export default UserContext;
