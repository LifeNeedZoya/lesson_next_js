import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const BigCard = ({ blogData }) => {
  return (
    <Link href={"/blog/" + blogData.id}>
      <div className="flex border">
        <div className="">
          <img src={blogData?.social_image || ""} width={400} height={300} />
          <span> {formatDate(blogData.created_at)}</span>
        </div>
        <div className=" ml-5 flex flex-col justify-around ">
          <h2 className="font-semibold">{blogData.title}</h2>{" "}
          <span>{blogData.description}</span>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
