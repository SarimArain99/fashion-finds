import React from "react";
import womenfashion from "./womenfashion";
import Image from "next/image";
import Link from "next/link";

type props = {
  search: string;
  filter: string;
};
const Women: React.FC<props> = ({ search, filter }) => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 px-5">
        {womenfashion
          .filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase());
          })
          .filter((item) =>
            item.category.toLowerCase().includes(filter.toLowerCase())
          )
          .map((item) => (
            <Link
              href={`/women/${item.id}`}
              key={item.id}
              className="p-5 bg-white border rounded-lg shadow-lg"
            >
              <div className="h-[500px]">
                <div className="h-[70%] overflow-hidden rounded-t-lg">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    height={1000}
                    width={1000}
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
export default Women;
