import { FaCartShopping } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "./ItemCard";
import toast from "react-hot-toast";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <>
      <div
        className={`fixed bg-white top-0 right-0 w-full h-full lg:w-[20vw] p-5 ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setShowCart(false)}
            className="border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => {
              return (
                <ItemCard
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  qty={item.qty}
                />
              );
            })
          ) : (
            <h2 className="text-center text-xl fond-bold text-gray-800">
              Your Cart is empty
            </h2>
          )}
        <div className="absolute bottom-0 mb-5">
          <h3 className="font-semibold text-gray-800">Total : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}{" "}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => {
              if (cartItems.length > 0) {
                navigate("/success");
              } else {
                toast("Cart is Empty");
              }
            }}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw]"
          >
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => setShowCart(true)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        }`}
      />
    </>
  );
};

export default Cart;
