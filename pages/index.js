
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function HomePage() {
  const [cart, setCart] = useState([]);

  const dummyShoes = [
    { id: 1, name: "Predator Edge", price: "₹2,499", image: "/placeholder1.jpg" },
    { id: 2, name: "Nike Mercurial", price: "₹2,999", image: "/placeholder2.jpg" },
    { id: 3, name: "Puma Future", price: "₹1,999", image: "/placeholder3.jpg" }
  ];

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  return (
    <div className="p-4 bg-green-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">The Indian Football Store</h1>
      <p className="text-center text-lg mb-8">Best Football Shoes at Unbelievable Prices</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {dummyShoes.map((shoe) => (
          <Card key={shoe.id} className="rounded-2xl shadow-md">
            <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover rounded-t-2xl" />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold">{shoe.name}</h2>
              <p className="text-green-700 font-bold">{shoe.price}</p>
              <Button className="mt-2 w-full" onClick={() => addToCart(shoe)}>
                Add to Cart <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-2">Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <Button className="mt-4 w-full bg-green-700 hover:bg-green-800">
            Proceed to Payment
          </Button>
        )}
      </div>
    </div>
  );
}
