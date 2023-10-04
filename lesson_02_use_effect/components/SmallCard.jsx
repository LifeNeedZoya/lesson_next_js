import React from "react";

const SmallCard = ({ blogData }) => {
  return (
    <div className="flex-1 w-full flex flex-col gap-5">
      {blogData.map((item) => (
        <div className="flex-1 flex border truncate">
          <img src={item.social_image} width={300} height={100} />
          <div className="gap-5 align">
            <span className="m-2">August 22, 2022 </span>
            <h1 className="font-semibold m-2">{item.title}</h1>
            <span className=" m-2">{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
