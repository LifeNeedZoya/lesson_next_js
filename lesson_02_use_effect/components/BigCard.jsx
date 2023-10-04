import React from "react";

const BigCard = ({ blogData }) => {
  return (
    <div className="flex border">
      <div className="">
        <img src={blogData?.social_image || ""} width={400} height={300} />
      </div>
      <div className=" ml-5 flex flex-col justify-around ">
        <span>August 22, 2022 </span>
        <h2 className="font-semibold">{blogData.title}</h2>{" "}
        <span>{blogData.description}</span>
      </div>
    </div>
  );
};

export default BigCard;
