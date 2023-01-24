import React from "react";

import products from "../../assets/files/products.json";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  return (
    <>
      <div className="flex flex-col bg-white w-[80%] m-auto mt-[5%] rounded-xl p-5 ">
        <div className="flex justify-between items-center w-full mb-5">
          <h1 className="font-medium text-2xl">Recommended for you</h1>

          <a className="text-primaryColor no-underline">See more</a>
        </div>

        <div className="flex flex-wrap gap-5 items-start justify-start">
          {/* products list */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
