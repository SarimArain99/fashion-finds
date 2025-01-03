"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { createContext, useState, ReactNode, useContext } from "react";

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ShopContextType {
  favourites: { name: string; image: string | StaticImport }[];
  cart: Product[];
  addToFavourites: (product: Product) => void;
  addToCart: (product: Product) => void;
}

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

export const ShopProvider = ({ children }: { children: ReactNode }) => {
  const [favourites, setFavourites] = useState<{ name: string; image: string | StaticImport }[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const addToFavourites = (product: Product) => {
    const existingProduct = favourites.find((item) => item.name === product.name);
    if (!existingProduct) {
      setFavourites([...favourites, { name: product.name, image: product.image }]);
    }
  };

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <ShopContext.Provider value={{ favourites, cart, addToFavourites, addToCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = (): ShopContextType => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
