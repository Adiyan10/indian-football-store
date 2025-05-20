
import { useState } from 'react';

export default function HomePage() {
  const [cart, setCart] = useState([]);

  const shoes = [
    { id: 1, name: 'Predator Edge', price: '₹2,499', image: '/placeholder1.jpg' },
    { id: 2, name: 'Nike Mercurial', price: '₹2,999', image: '/placeholder2.jpg' },
    { id: 3, name: 'Puma Future', price: '₹1,999', image: '/placeholder3.jpg' }
  ];

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>The Indian Football Store</h1>
      <p>Best Football Shoes at Unbelievable Prices</p>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {shoes.map(shoe => (
          <div key={shoe.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
            <img src={shoe.image} alt={shoe.name} style={{ width: '100%' }} />
            <h3>{shoe.name}</h3>
            <p>{shoe.price}</p>
            <button onClick={() => addToCart(shoe)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <h2>Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - {item.price}</li>
        ))}
      </ul>
    </div>
  );
}
