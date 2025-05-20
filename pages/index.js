
import { useState } from 'react';

export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const shoes = [
    { id: 1, name: 'Predator Edge', price: '₹2,499', image: '/placeholder1.jpg' },
    { id: 2, name: 'Nike Mercurial', price: '₹2,999', image: '/placeholder2.jpg' },
    { id: 3, name: 'Puma Future', price: '₹1,999', image: '/placeholder3.jpg' }
  ];

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
    setFormVisible(true);
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

      {formVisible && (
        <div style={{ marginTop: '40px' }}>
          <h2>Complete Your Order</h2>
          <p>Send payment to <strong>adiyan@fam</strong> via FamPay, then fill out this form:</p>
          <form action="https://formsubmit.co/the.indian.football.store@gmail.com" method="POST" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px' }}>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="Full Name" placeholder="Full Name" required />
            <input type="email" name="Email Address" placeholder="Email Address" required />
            <input type="text" name="Phone Number" placeholder="Phone Number" required />
            <input type="text" name="State/UT" placeholder="State / UT" required />
            <input type="text" name="Town / City" placeholder="Town / City" required />
            <input type="text" name="Area Name" placeholder="Area Name" required />
            <input type="text" name="Landmark" placeholder="Landmark (optional)" />
            <input type="text" name="PIN Code" placeholder="PIN / ZIP Code" required />
            <input type="file" name="Payment Screenshot" accept="image/*" required />
            <button type="submit">Submit Order</button>
          </form>
        </div>
      )}
    </div>
  );
}
