import React from "react";
import products from "../../assets/files/products.json";
import { BsTruck } from "react-icons/bs";

const Cart = () => {
  return (
    <div id="cart" className="flex w-[80%] m-auto mt-[6%] gap-[5%]">
      <CartSection />

      <div className="summary flex flex-col flex-[30%] bg-white rounded-xl xl p-5 h-fit shadow-lg">
        <h1 className="font-medium text-lg sm:text-xl">Order Summary</h1>

        <div className="border-b-[#ddd] border-b-[0.5px] py-2">Items</div>

        <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
          {products.map((product) => (
            <div key={product.id} className="flex justify-between mb-2">
              <div className="flex flex-col">
                <h1>{product.name}</h1>
                <p className="text-[grey] text-xs w-fit">Company name</p>
              </div>
              <h1 className="text-[#004] ">${product.price}</h1>
            </div>
          ))}
        </div>

        <div className="py-5 mb-5 border-b-[#ddd] border-b-[0.5px]">
          <h1>From:</h1>
          <p className="text-[grey] mb-3">30, Jibowu Yaba Lagos, Nigeria</p>
          <h1>To:</h1>
          <p className="text-[grey]">30, Jibowu Yaba Lagos, Nigeria</p>
        </div>

        <div>
          <div className="flex justify-between">
            <p className="text-[grey] mb-3">Weighted Item(s)</p>
            <p className="text-[#004] mb-3">${products[0].price.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            <p className="text-[grey] mb-3">Fees</p>
            <p className="text-[#004] mb-3">$20.00</p>
          </div>
        </div>

        <div className="flex justify-between font-semibold text-[18px] px-1">
          <p className="">Total</p>
          <p className="">$5000</p>
        </div>

        <div className="flex justify-between gap-2 mt-5">
          <button className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%]">
            Cancel
          </button>
          <button className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%] bg-primaryColor text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

const CartSection = () => {
  return (
    <div className="cart flex flex-col flex-[70%] bg-white rounded-xl p-5 shadow-sm">
      <div className="flex justify-between items-center w-full mb-5">
        <h1 className="font-medium text-lg sm:text-2xl">Cart</h1>

        <a href="#" className="text-primaryColor no-underline">
          View all
        </a>
      </div>

      {products.map((product) => (
        <CartItem product={product} />
      ))}
    </div>
  );
};

const CartItem = ({ product }) => {
  return (
    <div className="flex h-[200px] border-b-[#ddd] border-b-[0.5px] p-5 mt-5 gap-5">
      {/* img */}
      <div className="bg-lightGrey1 w-[100px] h-[100px] flex justify-center items-center rounded-2xl">
        <img
          src={product.image}
          alt="img"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-[50%] flex-col gap-1">
        <p className="text-[grey] w-[200px]">Company name</p>

        <h1 className="text-textColor font-semibold">{product.name}</h1>

        <p className="text-[grey] pt-1">#top rated</p>

        <div className="bg-[#8bffbf] text-[#14683a] rounded-lg flex justify-between items-center py-[5px] px-[7px] gap-2 w-fit mt-2">
          <p className="font-light text-[13px]">Free Shipping</p>
          <BsTruck className="text-[20px]" />
        </div>
      </div>

      {/* actions */}
      <div className="actions border-l-[1px] border-lightGrey2 h-[85%] flex flex-col justify-between pl-5">
        <div className="flex rounded-lg border border-[#ddd]">
          <button className="">-</button>
          <p className="">1</p>
          <button className="">+</button>
        </div>

        <h1 className="text-xl font-semibold">${product.price.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default Cart;
