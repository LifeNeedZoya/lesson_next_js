import React, { useEffect, useState } from "react";
import Image from "next/image";
import MediumCard from "./MediumCard";
import SmallCard from "./SmallCard";
import BigCard from "./BigCard";
const RecentBlog = () => {
  const [recentBlogMid, setRecentBlogMid] = useState({});
  const [recentBlogSmall, setRecentBlogSmall] = useState([]);
  const [recentBlogBig, setRecentBlogBig] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data = await res.json();
    console.log("datas", data);
    setRecentBlogMid(data.shift());
    setRecentBlogSmall(data.slice(0, 2));
    console.log("jijig", recentBlogSmall);
    setRecentBlogBig(data.pop());
  };

  return (
    <section className="mt-4 container mx-auto mb-[100px] ">
      Recent blog posts
      <div className="flex gap-4 mb-[100px]">
        <MediumCard blogData={recentBlogMid} />

        <SmallCard blogData={recentBlogSmall} />
      </div>
      <BigCard blogData={recentBlogBig} />
    </section>
  );
};

export default RecentBlog;
