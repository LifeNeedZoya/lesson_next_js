import React, { useEffect, useState } from "react";
import Blog from "./components/blog";
const Home = () => {
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
    <main className="container mx-auto">
      <section>
        <h2>All blog posts</h2>
        <div className="grid grid-cols-3 gap-3 rounded-2xl">
          {blogs.map((blog, i) => (
            <Blog blog={blog} />
          ))}{" "}
        </div>
      </section>
    </main>
  );
};

export default Home;
