import './App.css';
import JSXBasics from './components/JSXBasics/JSXBasics';
import Product from './components/Product/Product';

function App() {

    //fetch products from backend

    //list of products: array[{title, price, image},{title, price, image}}]
    const productsList = [
        {
            title: "Trending Shoes",
            image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww",
            price: 200.23,
        },
        {
            title: "Nike Shoes",
            image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fHww",
            price: 300.43,
        },
        {
            title: "Best Seller",
            image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2VzfGVufDB8fDB8fHww",
            price: 400.53,
        },
        {
            title: "Brand New Shoes",
            image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2VzfGVufDB8fDB8fHww",
            price: 500.53,
        },
    ]


    return (
        <section >

            {/* <JSXBasics /> */}
            <h1>Products</h1>
            <section className="productsList">
                {
                    productsList.map((product) => {
                        return <Product
                            key={product.title}
                            title={product.title}
                            image={product.image}
                            price={product.price}
                        />
                    })
                }
            </section>

        </section>
    )
}

export default App
