"use client";
import { useShop } from "@/app/context/ShopContext";
import Image from "next/image";

const Cart = () => {
  const { cart } = useShop(); 
  return (
    <div className="pt-20 sm:px-10 px-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center uppercase cursor-default">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-xl font-semibold">Your Cart is Empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-x-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-36 object-cover rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-lg font-semibold">${item.price.toFixed(2)}</div>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold">
              Total: $
              {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
