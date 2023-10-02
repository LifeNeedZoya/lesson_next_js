import React from "react";

const MediumCard = ({ blogData }) => {
  return (
    <div className="flex ">
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
    </div>
  );
};

export default MediumCard;
