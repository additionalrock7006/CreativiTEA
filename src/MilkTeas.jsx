import Card from './ProductCard.jsx'
import './css/MilkTeas.css'

const milktea_products = [
    {
        id: 1,
        image: 'booba.webp',
        name: 'Okinawa',
        price: 99,
        desc: '"a tasty blend of black tea, milk, and sweetener"'
    },
        {
        id: 2,
        image: 'booba.webp',
        name: 'Unnamed Milktea',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 3,
        image: 'booba.webp',
        name: 'Unnamed Milktea',
        price: 99,
        desc: 'Flukemunga'
    },
        {
        id: 4,
        image: 'booba.webp',
        name: 'Unnamed Milktea',
        price: 99,
        desc: 'Flukemunga'
    }
]

function MilkTeas() {
    return(
        <div className="milktea-products-container">
            {milktea_products.map((milktea_products) => (
                <Card
                key={milktea_products.id}
                image={milktea_products.image}
                name={milktea_products.name}
                price={milktea_products.price}
                desc={milktea_products.desc}
                />
            ))}
        </div>
    );
}

export default MilkTeas;