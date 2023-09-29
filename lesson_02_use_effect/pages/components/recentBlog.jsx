import React, { useEffect, useState } from "react";
import Image from "next/image";
const RecentBlog = () => {
  const [recentBlog, setRecentBlog] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    console.log("datas", data);
    setRecentBlog(data);
  };
  return (
    <section className="mt-4 container mx-auto  ">
      Recent blog posts
      <div className="flex bg-slate-500">
        <div className=" w-full flex-1 ">
          <div className="w-[592px] ">
            <Image src="/" width={592} height={290} alt="alt" />
          </div>
          <h2 className="">{}</h2>{" "}
          <span className="">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </span>
        </div>
        <div className="flex-1 w-full flex flex-col">
          <div className="flex-1">
            <Image src="/images/pic.jpg" width={300} height={100} />
            <span>August 22, 2022 </span>
            <h2 className="">UX review presentations</h2>{" "}
            <span className="">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
          <div className="flex-1">
            <Image src="/images/pic.jpg" width={300} height={100} />
            <span>August 22, 2022 </span>
            <h2 className="">UX review presentations</h2>{" "}
            <span className="">
              How do you create compelling presentations that wow your
              colleagues and impress your managers?
            </span>
          </div>
        </div>
      </div>
      <div className="flex lg:mt-12 bg-slate-300">
        <div className="flex-1">
          <Image src="/pic.jpg" width={400} height={300} />
        </div>
        <div className="flex-1">
          <span>August 22, 2022 </span>
          <h2 className="">UX review presentations</h2>{" "}
          <span>
            A grid system is a design tool used to arrange content on a webpage.
            It is a series of vertical and horizontal lines that create a matrix
            of intersecting points, which can be used to align and organize page
            elements. Grid systems are used to create a consistent look and feel
            across a website, and can help to make the layout more visually
            appealing and easier to navigate.
          </span>
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
