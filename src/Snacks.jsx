import React from 'react';
import Card from './ProductCard.jsx'
import './css/MilkTeas.css'

const snacks_products = [ 
    {
        id: 1,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Snack',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 2,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Snack',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 3,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Snack',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 4,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Snack',
        price: 99,
        desc: 'Flukemunga'
    }
]

function Snacks() {
    return(
        <div className="milktea-products-container">
            {snacks_products.map((snacks_products) => (
                <Card
                key={snacks_products.id}
                image={snacks_products.image}
                name={snacks_products.name}
                price={snacks_products.price}
                desc={snacks_products.desc}
                />
            ))}
        </div>
    );
}

export default Snacks;