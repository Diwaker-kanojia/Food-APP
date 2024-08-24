import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { removeFromcart } from "../redux/Slices/CartSlice";
import { incrementQty } from "../redux/Slices/CartSlice";
import { decrementQty } from "../redux/Slices/CartSlice";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const ItemCard = ({ id, name, img, price, qty }) => {
  const disptach = useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3" ke>
      <MdDelete
        onClick={() => {
          disptach(removeFromcart({ id, name, img, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-600 cursor-pointer"
      />
      <img src={img} alt={name} className="w-[50px] h-[50px]" />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex">
          <span className="text-green-500 font-bold">₹ {price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? disptach(decrementQty({ id })) : (qty = 1)
              }
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() => disptach(incrementQty({ id }))}
              className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
