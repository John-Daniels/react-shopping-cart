import React from "react";
import products from "../../assets/files/products.json";
import { useDispatch, useSelector } from "react-redux";
import CartSummary from "../../components/CartSummary/CartSummary";
import CartSection from "../../components/CartSection/CartSection";
import { useAppSelector } from "../../store";
import { ICartItem } from "../../store/cart.slice";

const Cart = () => {
  const cartItems = useAppSelector((store) => store.cart.items) as ICartItem[];

  return (
    <div
      id="cart"
      className="flex flex-col flex-wrap sm:flex-row sm:flex-nowrap w-[80%] m-auto mt-[4%] gap-[5%] "
    >
      <CartSection cartItems={cartItems} />

      <CartSummary cartItems={cartItems} />
    </div>
  );
};

export default Cart;
