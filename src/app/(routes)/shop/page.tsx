"use client";
import React, { useEffect, useState } from "react";
import Men from "../components/Men";
import Women from "../components/Women";
import Shoes from "../components/Shoes";
import Watches from "../components/Watches";
import Glasses from "../components/Glasses";
import Purse from "../components/Purse";

function Shop() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");


  return (
    <div className="pt-20 space-y-5">
      <div className="flex justify-between sm:mx-5 mx-10 md:flex-row flex-col items-center space-y-2">
        <select
          name="filter"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 duration-300 w-60 px-4 py-2"
        >
          <option value="" hidden>
            Filter by Category
          </option>
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
          <option value="shoes">Shoes</option>
          <option value="watches">Watches</option>
          <option value="glasses">Glasses</option>
          <option value="purse">Purse</option>
        </select>

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
          className="border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 duration-300 w-60 px-4 py-2"
        />
      </div>
      <div>
        <Men search={search} filter={filter} />
        <Women search={search} filter={filter} />
        <Shoes search={search} filter={filter} />
        <Watches search={search} filter={filter} />
        <Glasses search={search} filter={filter} />
        <Purse search={search} filter={filter} />
      </div>
    </div>
  );
}

export default Shop;
