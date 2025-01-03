import Image from "next/image";
import React from "react";
import pursefashion from "./pursefashion";
import Link from "next/link";
type props = {
  search: string;
  filter: string;
};

const Purse: React.FC<props> = ({ search, filter }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-5">
        {pursefashion
          .filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
          .filter((item) =>
            item.category.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item) => (
            <Link
              href={`/purse/${item.id}`}
              key={item.id}
              className="p-5 bg-white border rounded-lg shadow-lg"
            >
              <div className="h-[500px]">
                <div className="h-[70%] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={500}
                    width={500}
                    className="w-full h-full object-cover hover:scale-105 duration-300 rounded-t-lg"
                  />
                </div>
                <div className="h-[30%] text-center mt-10">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {item.name}
                  </h2>
                  <p className="text-lg text-gray-600">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Purse;
