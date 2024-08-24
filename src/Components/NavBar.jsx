import { setSearch } from "../redux/Slices/SearchSlice";
import { useDispatch } from "react-redux";
import React from "react";
const NavBar = () => {
  const disptach = useDispatch()
  return (
    <>
      <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
        <div>
          <h3 className="text-xl font-bold text-gray-600">{new Date().toUTCString().slice(0, 16)}</h3>
          <h1 className="text-2xl font-bold">Flavoro Foods</h1>
        </div>
        <div>
          <input
          onChange={(e)=> disptach(setSearch(e.target.value))}
          className="p-3 border border-gray-400 outline-none text-sm rounded-lg w-full lg:w-[25vw]"
            type="Search"
            name="search"
            placeholder="Search here..."
            autoComplete="off"
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
