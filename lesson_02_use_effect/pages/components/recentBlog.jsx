import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    setRecentBlogBig(data.pop());
  };

  return (
    <section className="mt-4 container mx-auto  ">
      Recent blog posts
      <MediumCard blogData={recentBlogMid} />
      <SmallCard blogData={recentBlogSmall} />
      <BigCard blogData={recentBlogBig} />
    </section>
  );
};

export default RecentBlog;
