import React from "react";
import Image from "next/image";
const SinglePost = () => {
  //   const publishedDate = Date.now().setDate(32);

  return (
    <div className="bg-green-400 w-full flex ">
      <div className="flex-1">
        <Image src="/pic.jpg" width={400} height={300} />
      </div>
      <div className="flex-1">
        <span>August 22, 2022 </span>
        <h2 className="">UX review presentations</h2>{" "}
        <span className="">
          How do you create compelling presentations that wow your colleagues
          and impress your managers?
        </span>
      </div>
    </div>
  );
};

export default SinglePost;
