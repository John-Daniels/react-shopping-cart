import { add } from "../../store/cart.slice";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product, isInCart }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { image, name, price, color, desc } = product;

  return (
    <div className="flex flex-col" id="product__card">
      <div className="bg-lightGrey1 rounded-2xl p-1 relative flex items-center justify-center w-[250px] cursor-pointer">
        <img
          src={image}
          alt={name}
          className="h-[220px] w-[220px] object-contain"
        />

        <div
          className={`cart-btn absolute top-3 right-3 p-1 text-[28px] bg-white rounded-[0.3rem] hover:bg-primaryColor hover:text-white ${
            isInCart && "hidden"
          }`}
          onClick={() => {
            dispatch(add(product));
            // navigate("/cart");
          }}
        >
          <AiOutlineShoppingCart />
        </div>
      </div>

      <div className="pt-2 flex w-full justify-between">
        <p>{name}</p>
      </div>
      <p className="text-[grey] w-[200px]">{desc}</p>

      <p className="font-[600] text-lg">${price}</p>
    </div>
  );
};

export default ProductCard;
