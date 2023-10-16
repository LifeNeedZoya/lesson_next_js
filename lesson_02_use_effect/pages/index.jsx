import React from "react";
import RecentBlog from "../components/recentBlog";
import { useState } from "react";
import AllArticles from "@/components/NinePosts";
import { useRouter } from "next/router";

const Home = ({ blogs }) => {
  const [pages, setPages] = useState(0);
  function PagePlus() {
    setPages(pages + 3);
  }

  return (
    <div>
      <RecentBlog blogs={blogs} />
      <AllArticles blogs={blogs} />
      <button>load more</button>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
