import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const SmallCard = ({ blogData }) => {
  return (
    <div className="  md:flex md:flex-col gap-5">
      {blogData.map((item) => (
        <Link href={"/blog/" + item.id}>
          <div className=" md:flex border truncate">
            <img src={item.social_image} className="w-full md:w-1/2" />
            <div className="gap-5 ">
              <p className="m-2">{item.readable_publish_date} </p>
              <h1 className="font-semibold  m-2 ">{item.title}</h1>
              <span className=" m-2">{item.description}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmallCard;
