import React from "react";
import Logo from "./logo";
import { BsSearch } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";

const Navbar = () => {
  const navDatas = ["Home", "Blog", "Contact"];
  const isOpen = true;
  return (
    <div>
      <li className="flex justify-around mt-4 bg-slate-600 ">
        <ul className=" pl-4">
          <Logo className=" w-2 h-1" />
        </ul>
        {isOpen ? (
          <ul className="items-center flex ">{navDatas.map((Data) => Data)}</ul>
        ) : (
          <button>
            <IoIosApps />
          </button>
        )}
        <ul className="flex border border-x-white rounded-lg bg-gray-200 ">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-2"
          />{" "}
          <button className=" w-9 h-9  ">
            <BsSearch width={50} height={50} />
          </button>
        </ul>
      </li>
    </div>
  );
};

export default Navbar;
