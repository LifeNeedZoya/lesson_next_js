import React from "react";
import AllArticles from "./components/AllArticless";
import RecentBlog from "./components/recentBlog";
const Home = () => {
  return (
    <div>
      <RecentBlog />
      <AllArticles />
    </div>
  );
};

export default Home;
