import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DisplayData() {
  return (
    <div className="my-10 mx-2 space-y-20">
      <Link
        href="/men"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            MEN FASHION
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Discover the latest in men's fashion, featuring timeless styles and
            modern trends that suit every occasion.
          </p>
        </div>
        <span>
          <Image
            src="/men.png"
            alt="men"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
      <Link
        href="/women"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            WOMEN FASHION
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Elevate your wardrobe with our stunning collection of women's
            fashion that captures elegance and sophistication.
          </p>
        </div>
        <span>
          <Image
            src="/women.png"
            alt="women"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
      <Link
        href="/shoes"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            SHOES
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Step up your style game with our latest selection of shoes, designed
            for comfort and fashion-forward appeal.
          </p>
        </div>
        <span>
          <Image
            src="/shoes.png"
            alt="shoes"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
      <Link
        href="/watches"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            WATCHES
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Discover the art of precision with our exquisite range of watches,
            perfect for every moment that matters.
          </p>
        </div>
        <span>
          <Image
            src="/watches.png"
            alt="watches"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
      <Link
        href="/glasses"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3 text-center md:text-left">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            GLASSES
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Protect your eyes and elevate your look with our fashionable and
            functional glasses collection.
          </p>
        </div>
        <span>
          <Image
            src="/glasses.png"
            alt="glasses"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
      <Link
        href="/purse"
        className="flex flex-col items-center md:flex-row justify-between border-2 border-gray-300  p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slideIn bg-gray-100"
      >
        <div className="md:w-1/2 space-y-3 mb-3">
          <h1 className="text-3xl font-semibold animate-fadeInUp text-center">
            BAGS
          </h1>
          <p className="text-lg text-gray-700 animate-fadeInUp delay-150 text-center">
            Carry your essentials in style with our collection of bags, blending
            utility and fashion effortlessly.
          </p>
        </div>
        <span>
          <Image
            src="/purse.png"
            alt="purse"
            className="w-full md:w-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp border border-gray-300"
            width={1000}
            height={1000}
          />
        </span>
      </Link>
    </div>
  );
}
