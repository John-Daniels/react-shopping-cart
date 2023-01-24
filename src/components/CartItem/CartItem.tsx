import {
  decrementCartItemById,
  incrementCartItemById,
  remove,
} from "../../store/cart.slice";
import { BsTruck } from "react-icons/bs";
import { useDispatch } from "react-redux";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { companyName, image, name, itemCount, id } = product;

  return (
    <div className="flex h-[200px] border-b-[#ddd] border-b-[0.5px] p-5 mt-5 gap-5">
      {/* img */}
      <div className="bg-lightGrey1 w-[100px] h-[100px] flex justify-center items-center rounded-2xl">
        <img
          src={image}
          alt="img"
          className="w-[80px] h-[80px] object-contain"
        />
      </div>

      {/* content */}
      <div className="flex flex-[50%] flex-col gap-1">
        <p className="text-[grey] w-[200px]">{companyName}</p>

        <h1 className="text-textColor font-semibold">{name}</h1>

        <p className="text-[grey] pt-1">#top rated</p>

        <div className="bg-[#8bffbf] text-[#14683a] rounded-lg flex justify-between items-center py-[5px] px-[7px] gap-2 w-fit mt-2">
          <p className="font-light text-[13px]">Free Shipping</p>
          <BsTruck className="text-[20px]" />
        </div>
      </div>

      {/* actions */}
      <div className="actions border-l-[1px] border-lightGrey2 h-[85%] flex flex-col justify-between pl-5">
        <div className="flex rounded-lg border border-[#ddd]">
          <button
            onClick={() => {
              itemCount > 1 && dispatch(decrementCartItemById(id));
            }}
            className={`${itemCount == 1 ? "opacity-40" : ""}`}
          >
            -
          </button>
          <p>{itemCount}</p>
          <button
            onClick={() => {
              dispatch(incrementCartItemById(id));
            }}
          >
            +
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold">${product.price.toFixed(2)}</h1>
          <div
            className="py-1 px-2 rounded-lg bg-[red] text-center w-fit text-[14px] text-white hover:opacity-60 transition cursor-pointer"
            onClick={() => dispatch(remove(id))}
          >
            remove
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
