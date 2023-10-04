import React, { useState } from "react";
import Logo from "./logo";
import { BsSearch } from "react-icons/bs";
import { IoIosApps } from "react-icons/io";
import Link from "next/link";
const Navbar = () => {
  const navDatas = ["Home", "Blog", "Contact"];

  const isOpen = true;

  const [getValue, setGetValue] = useState("");
  const [getData, setGetData] = useState([]);

  function handleInputChange(el) {
    setGetValue(el.target.value);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setGetData(data);
  };

  return (
    <div className="">
      <li className="flex justify-around mt-4 ">
        <ul className=" pl-4">
          <Link href={"/"}>
            <Logo className=" w-2 h-1" />
          </Link>
        </ul>

        <ul className="items-center flex gap-3">
          <li>
            <Link href={"/"}> Home</Link>
          </li>
          <li>
            <Link href={"/recentblog"}>Blogs</Link>
          </li>
          <li>
            <Link href={"/Contact"}> Contact</Link>
          </li>
        </ul>

        <ul className="flex border border-x-white rounded-lg bg-gray-200 ">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent pl-2"
            onChange={handleInputChange}
          />{" "}
          <button className=" w-9 h-9  ">
            <BsSearch width={50} height={50} />
            {getData.filter(.lowercase.includes(getValue))}
          </button>
        </ul>
      </li>
    </div>
  );
};

export default Navbar;
