import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const MediumCard = ({ article }) => {
  return (
    <div className="flex ">
      <div className=" w-full  md:block">
        <div className="w-full md:w-full flex-1 ] ">
          <img src={article?.social_image || ""} alt="alt" className="w-full" />
        </div>
        <div className="flex-1">
          <h2 className="font-bold">{article?.title}</h2>
          <div className="">{article?.description || "pic"}</div>
        </div>
      </div>
    </div>
  );
};

export default MediumCard;
