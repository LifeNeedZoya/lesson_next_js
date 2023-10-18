import React from "react";
import RecentBlog from "../components/recentBlog";
import { useState } from "react";
import AllArticles from "@/components/NinePosts";
import { useRouter } from "next/router";

const Home = ({ blogs, page }) => {
  const router = useRouter();

  return (
    <div>
      <RecentBlog blogs={blogs} />
      <AllArticles blogs={blogs} />
      <button
        onClick={() => {
          console.log("Clicked");
          const pg = Number(page) + 3;
          router.replace("?page=" + pg);
        }}
        className="bg-slate-700 self-center"
      >
        load more
      </button>
    </div>
  );
};

export async function getServerSideProps(context) {
  let { page } = context.query;
  page = page || 3;
  const res = await fetch(`https://dev.to/api/articles?per_page=${page}`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
      page,
    },
  };
}

export default Home;
