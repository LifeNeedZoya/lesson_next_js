import React, { useState, useEffect } from "react";
import Logo from "./logo";
import { BsSearch } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiRowsDuotone } from "react-icons/pi";

const Navbar = () => {
  const isActive = usePathname();
  const [getValue, setGetValue] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  const navDatas = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isOpen = true;

  return (
    <div className="mx-auto container flex sm:justify-between">
      <li className="flex justify-between w-full">
        <ul className=" md:pl-4 md:w-2 sm:w-5 lg:w-9  gap-1 flex justify-start ">
          <Link href={"/"}>
            <Logo />
          </Link>
        </ul>
        <ul className="items-center justify-center  md:flex gap-3 hidden  md:visible">
          {navDatas.map((data, i) => (
            <li clas>
              <Link
                className={` ${
                  isActive === data.path
                    ? "text-red-600 "
                    : "hover:text-green-500"
                }`}
                href={data.path}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className=" border sm:w-auto   border-x-white  rounded-lg bg-gray-200 md:flex gap-3 hidden  md: visible">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent md:pl-2"
          />{" "}
          <button className=" w-9 h-9  ">
            <BsSearch width={50} height={50} />
          </button>
        </ul>
      </li>
      <li className="md:hidden " id="navbarIcon">
        <ul
          onMouseEnter={handleDrawer}
          onMouseLeave={() => {
            setIsOpenDrawer(false);
          }}
          className="inline-block"
        >
          <PiRowsDuotone className="w-11 h-11" />
        </ul>
        {
          <ul className="">
            {isOpenDrawer &&
              navDatas.map((data, i) => (
                <li clas>
                  <Link
                    className={` ${
                      isActive === data.path
                        ? "text-red-600 "
                        : "hover:text-green-500"
                    }`}
                    href={data.path}
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
          </ul>
        }
      </li>
    </div>
  );
};

export default Navbar;
