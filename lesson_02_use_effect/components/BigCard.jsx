import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const BigCard = ({ blogData }) => {
  return (
    <Link href={"/blog/" + blogData.id}>
      <div className="md:flex border">
        <div className=" mx-2 flex-[0.4]">
          <img
            src={blogData?.social_image || ""}
            className="w-full md:w-[400px] lg:w-[500px] "
          />
        </div>
        <div className=" md:ml-3 flex flex-col justify-around flex-[0.6]">
          <span> {formatDate(blogData.created_at)}</span>
          <h2 className="font-semibold">{blogData.title}</h2>{" "}
          <span>{blogData.description}</span>
        </div>
      </div>
    </Link>
  );
};

export default BigCard;
