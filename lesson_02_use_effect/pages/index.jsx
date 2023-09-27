import Navbar from "./components/navbar";
import RecentBlog from "./components/recentBlog";
import SinglePost from "./components/singlePost";
export default function Home() {
  return (
    <main className="bg-stone-600">
      <Navbar />
      <RecentBlog />
      <SinglePost />
    </main>
  );
}
