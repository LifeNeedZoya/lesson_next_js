import React from "react";
import Image from "next/image";
const RecentBlog = () => {
  return (
    <section className="mt-4 bg-red-400    ">
      Recent blog posts
      <div className="flex">
        <div className="bg-green-400 w-full flex-1 ">
          <Image src="/pic.jpg" width={400} height={300} />
          <span>August 22, 2022 </span>
          <h2 className="">UX review presentations</h2>{" "}
          <span className="">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </span>
        </div>
        <div className="flex-1 bg-blue-400 w-full flex flex-col">
          <div className="flex-1">
            <Image />
            <span>August 22, 2022 </span>
            <h2 className="">UX review presentations</h2>{" "}
            <span className="">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
          <div className="flex-1">
            <Image />
            <span>August 22, 2022 </span>
            <h2 className="">UX review presentations</h2>{" "}
            <span className="">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
