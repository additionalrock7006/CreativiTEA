import React from 'react';
import Card from './ProductCard.jsx'
import './css/MilkTeas.css'

const coffee_products = [
    {
        id: 1,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Coffee',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 2,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Coffee',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 3,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Coffee',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 4,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Coffee',
        price: 99,
        desc: 'Flukemunga'
    }
]

function Coffees() {
    return(
        <div className="milktea-products-container">
            {coffee_products.map((coffee_products) => (
                <Card
                key={coffee_products.id}
                image={coffee_products.image}
                name={coffee_products.name}
                price={coffee_products.price}
                desc={coffee_products.desc}
                />
            ))}
        </div>
    );
}

export default Coffees;