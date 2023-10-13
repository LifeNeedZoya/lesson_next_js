import React, { useEffect, useState } from "react";

import Link from "next/link";

const AllArticles = () => {
  const [blogs, setBlogs] = useState([]);
  const [pages, setPages] = useState(6);
  const handlePages = () => {
    setPages(pages + 6);
  };
  useEffect(() => {
    fetchData();
  }, [pages]);

  const fetchData = async () => {
    const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };

  return (
    <main className="md:container md:mx-auto  ">
      <section>
        <h2 className="font-bold">All blog posts</h2>
        <div className="grid lg:grid-cols-3 lg:gap-3 lg:rounded-2xl grid-cols-1 md:grid-cols-2 md:gap-2 gap-1  ">
          {blogs.map((blog, i) => (
            <Link href={"/blog/" + blog.id}>
              <div className="border flex flex-col p-2 rounded-md ">
                <div className="overflow-hidden ">
                  <img
                    src={
                      blog.cover_image ? blog.cover_image : "/images/pic.jpg"
                    }
                    alt=""
                    className=" sm:w-[80%] h-[250px] p-4 rounded-2xl hover:scale-105 m-[8%] md:w-full md:m-0  "
                  />
                </div>
                <div className="ml-3">
                  <button className="text-[#4B6BFB] backdrop-blur-md rounded-lg p-[5px] mt-2 mb-2 bg-[#eff3fc]">
                    {blog?.type_of}
                  </button>
                  <h2 className="font-bold truncate">{blog.title}</h2>
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
            </Link>
          ))}{" "}
        </div>
      </section>
      <div className="flex justify-center item-center">
        <button
          className=" p-2
          border rounded-lg mt-2"
          onClick={handlePages}
        >
          Load more
        </button>
      </div>
    </main>
  );
};

export default AllArticles;
