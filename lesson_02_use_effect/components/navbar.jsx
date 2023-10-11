import React, { useState, useEffect } from "react";
import Logo from "./logo";
import Loader from "./Loader";
import { BsSearch } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const [getValue, setGetValue] = useState("");
  const [getData, setGetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navDatas = ["Home", "Blog", "Contact"];

  const isOpen = true;

  function handleInputChange(el) {
    setGetValue(el.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=9");
      console.log("res", res);
      const data = await res.json();
      console.log(data);
      setGetData(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError("Error occured");
    }
  };

  return (
    <div className="mx-auto container">
      {isLoading && <Loader />}
      {error && <h1>{error} </h1>}
      <li className="flex md:flex-row flex-col md:justify-around  mt-4  ">
        <ul className=" md:pl-4 md:w-2 sm:w-5 lg:w-9 self-center">
          <Link href={"/"}>
            <Logo />
          </Link>
        </ul>

        <ul className="items-center flex justify-around md:gap-2 lg:gap-3">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/Contact"}> Contact</Link>
          </li>
        </ul>

        <ul className="flex border sm:w-auto   border-x-white  rounded-lg bg-gray-200 ">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent md:pl-2"
            onChange={handleInputChange}
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
