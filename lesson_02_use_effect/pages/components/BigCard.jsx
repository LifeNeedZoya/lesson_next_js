import React from "react";

const BigCard = ({ blogData }) => {
  return (
    <div className="flex lg:mt-12 bg-slate-300">
      <div className="flex-1">
        <img src={blogData?.social_image || ""} width={400} height={300} />
      </div>
      <div className="flex-1">
        <span>August 22, 2022 </span>
        <h2 className="">{blogData.title}</h2>{" "}
        <span>{blogData.description}</span>
      </div>
    </div>
  );
};

export default BigCard;
