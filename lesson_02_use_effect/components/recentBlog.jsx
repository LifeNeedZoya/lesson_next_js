import React, { useEffect, useState } from "react";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";

const RecentBlog = ({ article }) => {
  const [recentBlogMid, setRecentBlogMid] = useState({});
  const [recentBlogSmall, setRecentBlogSmall] = useState([]);
  const [recentBlogBig, setRecentBlogBig] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    console.log("data's_id", data);
    setRecentBlogMid(data.shift());
    setRecentBlogSmall(data.slice(0, 2));
    setRecentBlogBig(data.pop());
  };

  return (
    <section className="mt-4 container mx-auto mb-[100px] ">
      Recent blog posts
      <div className=" lg:flex lg:gap-4 lg:mb-[100px] md:mb-6 whitespace-wrap">
        <div className="lg:flex-1">
          <MediumCard blogData={recentBlogMid} />
        </div>

        <div className="lg:flex-1">
          <SmallCard blogData={recentBlogSmall} />
        </div>
      </div>
      <BigCard blogData={recentBlogBig} />
    </section>
  );
};

export default RecentBlog;
