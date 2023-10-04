import React from "react";
import AllArticles from "../components/AllArticless";
import RecentBlog from "../components/recentBlog";
const Home = () => {
  return (
    <div>
      <RecentBlog />
      <div className="mb-[100px]">
        <AllArticles />
      </div>
    </div>
  );
};

export default Home;
