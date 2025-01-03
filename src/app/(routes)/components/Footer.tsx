"use client";
import Link from "next/link";
import React, { useState } from "react";

function Footer() {
  const [shopOpen, setShopOpen] = useState(false);
  const [moreSecOpen, setMoreSecOpen] = useState(false);
  const [customerSecOpen, setCustomerSecOpen] = useState(false);
  const [policySecOpen, setPolicySecOpen] = useState(false);
  return (
    <footer className="mt-10 border-t-2 border-gray-300 p-10 bg-gray-100">
      <div className="flex lg:flex-row flex-col justify-between gap-y-7">
        <div className="flex flex-col space-y-2">
          <div
            className="flex items-center justify-between"
            onClick={() => setShopOpen(!shopOpen)}
          >
            <span className="mr-2 font-bold text-xl">SHOP</span>
            <svg
              className={`w-8 h-7 lg:hidden text-gray-800 transition-transform ${
                shopOpen ? "rotate-90" : "rotate-0"
              } duration-1000`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={shopOpen ? "M6 18L18 6M6 6l12 12" : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>
          <div
            className={`flex flex-col  mt-4 lg:mt-0 ${
              shopOpen ? "" : "lg:flex hidden"
            }`}
          >
            <Link href="/men" className="hover:underline">
              Men
            </Link>
            <Link href="/women" className="hover:underline">
              Women
            </Link>
            <Link href="/shoes" className="hover:underline">
              Shoes
            </Link>
            <Link href="/watches" className="hover:underline">
              Watches
            </Link>
            <Link href="/glasses" className="hover:underline">
              Glasses
            </Link>
            <Link href="/purse" className="hover:underline">
              Purse
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div
            className="flex items-center justify-between"
            onClick={() => setCustomerSecOpen(!customerSecOpen)}
          >
            <span className="mr-2 font-bold text-xl">Customer Service</span>
            <svg
              className={`w-8 h-7 lg:hidden text-gray-800 transition-transform  ${
                customerSecOpen ? "rotate-90" : "rotate-0"
              } duration-1000 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  customerSecOpen ? "M6 18L18 6M6 6l12 12" : "M12 4v16M4 12h16"
                }
              />
            </svg>
          </div>
          <div
            className={`flex flex-col space-y-2 mt-4 lg:mt-0 ${
              customerSecOpen ? "" : "lg:flex hidden"
            }`}
          >
            <div>
              <p>Live Chat</p>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
              <p>Size Chart</p>
              <p>Track Your Order</p>
              <p>Your Gift Card Balance</p>
              <p>Gifting Concierge</p>
              <p>Group Orders</p>
              <p>FAQs</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div
            className="flex items-center justify-between"
            onClick={() => setPolicySecOpen(!policySecOpen)}
          >
            <span className="mr-2 font-bold text-xl">Our Policies</span>
            <svg
              className={`w-8 h-7 lg:hidden text-gray-800 transition-transform  ${
                policySecOpen ? "rotate-90" : "rotate-0"
              } duration-1000 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={policySecOpen ? "M6 18L18 6M6 6l12 12" : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>
          <div
            className={`flex flex-col space-y-2 mt-4 lg:mt-0 ${
              policySecOpen ? "" : "lg:flex hidden"
            }`}
          >
            <div>
              <p>Returns & Exchanges</p>
              <p>Shipping</p>
              <p>Privacy Popcy</p>
              <p>CA Privacy Notice</p>
              <p>Accessibility Statement</p>
              <p>Code of Conduct</p>
              <p>Do Not Sell or Share My Personal Information</p>
              <p>Cookie Settings</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div
            className="flex items-center justify-between"
            onClick={() => setMoreSecOpen(!moreSecOpen)}
          >
            <span className="mr-2 font-bold text-xl">More</span>
            <svg
              className={`w-8 h-7 lg:hidden text-gray-800 transition-transform  ${
                moreSecOpen ? "rotate-90" : "rotate-0"
              } duration-1000 `}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={moreSecOpen ? "M6 18L18 6M6 6l12 12" : "M12 4v16M4 12h16"}
              />
            </svg>
          </div>
          <div
            className={`flex flex-col mt-4 lg:mt-0 ${
              moreSecOpen ? "" : "lg:flex hidden"
            }`}
          >
            <div className="flex flex-col">
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="" className="hover:underline">
                Store Locations
              </Link>
              <Link href="" className="hover:underline">
                Brand Impact
              </Link>
              <Link href="" className="hover:underline">
                Refer a Friend, Get 25% Off
              </Link>
              <Link href="" className="hover:underline">
                FASHION.FINDS Magazine
              </Link>
              <Link href="" className="hover:underline">
                Careers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
