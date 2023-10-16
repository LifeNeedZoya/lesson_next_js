import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";

const MediumCard = ({ blogData }) => {
  return (
    <div className="flex w-[550px] xl:w-full">
      <Link href={"/blog/" + blogData.id}>
        <div className=" w-full  md:block">
          <div className="w-full md:w-full flex-1  ">
            <img
              src={blogData?.social_image || ""}
              alt="alt"
              className="w-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-bold">{blogData?.title}</h2>
            <div className="">{blogData?.description || "pic"}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MediumCard;
