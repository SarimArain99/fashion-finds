"use client";
import { useShop } from "@/app/context/ShopContext";
import Image from "next/image";

const Favourites = () => {
  const { favourites } = useShop();

  return (
    <div className="pt-20 sm:px-10 px-5 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center uppercase cursor-default">
        Favourites
      </h1>
      {favourites.length === 0 ? (
        <p className="text-xl font-semibold">Your Favourites is Empty.</p>
      ) : (
        <div className="space-y-6">
          {favourites.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favourites;
