import React from "react";
import Logo from "./logo";
import { BsSearch } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const navDatas = ["Home", "Blog", "Contact"];
  const isOpen = true;
  return (
    <div className="">
      <li className="flex justify-around mt-4 ">
        <ul className=" pl-4">
          <Logo className=" w-2 h-1" />
        </ul>
        {isOpen ? (
          <ul className="items-center flex gap-3">
            <li>
              <Link href="/" />
              Home
            </li>
            <li>
              <Link href="/" />
              Blogs
            </li>
            <li>
              <Link href="/Footer" />
              Contact
            </li>
          </ul>
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
