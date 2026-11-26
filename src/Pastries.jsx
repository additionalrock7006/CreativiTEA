import React from 'react';
import Card from './ProductCard.jsx'
import './css/MilkTeas.css'

const pastries_products = [
    {
        id: 1,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Pastry',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 2,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Pastry',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 3,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Pastry',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 4,
        image: 'product-placeholder-real.png',
        name: 'Unnamed Pastry',
        price: 99,
        desc: 'Flukemunga'
    }
]

function Pastries() {
    return(
        <div className="milktea-products-container">
            {pastries_products.map((pastries_products) => (
                <Card
                key={pastries_products.id}
                image={pastries_products.image}
                name={pastries_products.name}
                price={pastries_products.price}
                desc={pastries_products.desc}
                />
            ))}
        </div>
    );
}

export default Pastries;