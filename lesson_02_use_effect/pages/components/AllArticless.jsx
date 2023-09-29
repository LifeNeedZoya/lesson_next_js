import React, { useEffect, useState } from "react";
import Blog from "./blog";
const AllArticles = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  return (
    <main className="container mx-auto border ">
      <section>
        <h2 className="font-bold">All blog posts</h2>
        <div className="grid grid-cols-3 gap-3 rounded-2xl">
          {blogs.map((blog, i) => (
            <div className="border flex flex-col p-2 rounded-md">
              <div className="overflow-hidden ">
                <img
                  src={blog.cover_image ? blog.cover_image : "/images/pic.jpg"}
                  alt=""
                  className=" w-[100%] h-[250px] p-4 rounded-2xl hover:scale-105  "
                />
              </div>
              <div className="ml-3">
                <button className="text-[#4B6BFB] backdrop-blur-md rounded-lg p-[5px] mt-2 mb-2 bg-[#eff3fc]">
                  {blog?.type_of}
                </button>
                <h2 className="font-bold">{blog.title}</h2>
                <div className="flex items-center lg:gap-5 gap-2 ">
                  <img
                    src={blog.user.profile_image}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <p style={{ opacity: 0.7 }} className="flex justify-around">
                    {blog.user.name}
                  </p>
                  <p style={{ opacity: 0.5 }}>{blog.readable_publish_date}</p>
                </div>
              </div>
            </div>
          ))}{" "}
        </div>
      </section>
    </main>
  );
};

export default AllArticles;
