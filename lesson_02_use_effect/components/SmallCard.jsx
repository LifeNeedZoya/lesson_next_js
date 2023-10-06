import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const SmallCard = ({ blogData }) => {
  return (
    <div className="  md:flex md:flex-col gap-5">
      {blogData.map((item) => (
        <Link href={"/blog/" + item.id}>
          <div className=" flex border truncate">
            <img src={item.social_image} width={300} height={100} />
            <div className="gap-5 ">
              <span className="m-2">{blogData.created_at} </span>
              <h1 className="font-semibold w-full m-2">{item.title}</h1>
              <span className=" m-2">{item.description}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SmallCard;
