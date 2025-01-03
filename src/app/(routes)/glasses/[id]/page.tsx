"use client";
import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import glassesfashion from "@/app/(routes)/components/glassesfashion";
import { useShop } from "@/app/context/ShopContext";

function MenDetails() {
  const params = useParams();
  const data: string | string[] = params.id;
  const { addToCart, addToFavourites } = useShop();
  type menType = {
    id: number;
    name: string;
    category: string;
    price: number;
    size: string[];
    color: string;
    material: string;
    stock: number;
    imageUrl: string;
  };

  const filteredData: any = glassesfashion.filter(
    (item: menType) =>
      item.id === parseInt(Array.isArray(data) ? data[0] : data)
  );

  return (
    <div>
      {filteredData.map(
        (
          item: {
            id: number;
            name: string;
            category: string;
            price: number;
            size: string[];
            color: string;
            material: string;
            stock: number;
            imageUrl: string;
          },
          index: number
        ) => {
          return (
            <div key={index} className="pt-28 flex lg:flex-row flex-col items-center justify-center sm:mx-10 mx-5 min-h-screen">
              <div className="h-96 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  height={1000}
                  width={1000}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="lg: pl-10 text-xl">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h2>
                <p className="text-lg text-gray-500 mb-4">
                  Category: <b>{item.category}</b>
                </p>
                <p className="text-md text-gray-600 mb-4">
                  Material: <b>{item.material}</b>
                </p>
                <p className="text-md text-gray-600 mb-4">
                  Color: <b>{item.color}</b>
                </p>
                <p className="text-md text-gray-600 mb-4">
                  Stock: <b>{item.stock} available</b>
                </p>
                <p className="text-md text-gray-600 mb-4">
                  Sizes: <b>{item.size.join(", ")}</b>
                </p>
                <p className="text-xl text-gray-800 mb-4">
                  Price: <b>${item.price.toFixed(2)}</b>
                </p>
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={() =>
                      addToFavourites({
                        name: item.name,
                        image: item.imageUrl,
                        price: 0,
                        quantity: 0,
                      })
                    }
                  >
                    <svg
                      className={`sm:h-12 h-10 sm:w-12 w-10 `}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>
                  <button
                    className="w-full bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300"
                    onClick={() =>
                      addToCart({
                        name: item.name,
                        price: item.price,
                        image: item.imageUrl,
                        quantity: 1,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
}

export default MenDetails;
