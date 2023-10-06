import React from "react";
import Link from "next/link";
import { formatDate } from "@/utils/functions";
const MediumCard = ({ blogData }) => {
  return (
    <div className="flex ">
      <Link href={"/blog/" + blogData.id}>
        <div className=" w-full flex-1  ">
          <div className="w-[592px] ">
            <img
              src={blogData?.social_image || ""}
              width={592}
              height={290}
              alt="alt"
            />
          </div>
          <h2 className="font-bold">{blogData?.title}</h2>
          <div className="">{blogData?.description || "pic"}-gygy</div>
        </div>
      </Link>
    </div>
  );
};

export default MediumCard;
