import './css/Card.css';
import './css/MilkTeas.css'

function ProductCard({ item, onOrder }) {
  return (
    <div className="card">
      <img
        className="product-photo"
        width={200}
        height={200}
        src={item.image}
        alt={item.name}
      />
      <h1 className="product-name">
        {item.name}{' '}
        <span className="product-price">₱{item.basePrice ?? item.price}</span>
      </h1>
      <p className="product-desc">{item.desc}</p>
      <button
        type="button"
        className="add-button"
        onClick={() => onOrder(item)}
      >
        <h2 className="button-buy">Buy</h2>
      </button>
    </div>
  );
}

export default ProductCard;