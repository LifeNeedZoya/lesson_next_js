import React from "react";

const SmallCard = ({ blogData }) => {
  return (
    <div className="flex-1 w-full flex flex-col">
      {blogData.map((item) => (
        <div className="flex-1">
          <img src={item.social_image} width={300} height={100} />
          <span>August 22, 2022 </span>
          <h2 className="">{item.title}</h2>{" "}
          <span className="">{item.desctiption}</span>
        </div>
      ))}
    </div>
  );
};

export default SmallCard;
