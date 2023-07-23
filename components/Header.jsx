import React, { useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../services";

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8 bg-green-800 rounded-b-lg">
      <div className="border-b w-full inline-block border-green-800 py-8">
        <div className="md:float-left block mr-4">
          <Link href="/" className="flex items-center">
            <img
              className="mr-3 h-16"
              src="/logobutuhlor.svg"
              alt="Butuh Lor Logo"
            />
            <span className="cursor-pointer font-bold text-4xl self-center whitespace-nowrap dark:text-white">
              Butuh Lor
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link href={`/tentangdukuh`}>
            <span className="md:float-right mt-2 lg:mt-5 align-middle text-white ml-4 font-semibold cursor-pointer">
              Tentang Dukuh
            </span>
          </Link>
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 lg:mt-5 align-middle text-white ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
