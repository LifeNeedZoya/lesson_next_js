import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { formatDate } from "@/utils/functions";
import RecentBlog from "@/components/recentBlog";
const BlogDetail = ({ article }) => {
  // const router = useRouter();

  // const { id } = router.query;

  // const [blogDetailData, setDetailData] = useState();

  // console.log("Router", id);

  // const getBlogDetail = async () => {
  //   const res = await fetch(`https://dev.to/api/articles/${id}`);
  //   const data = await res.json();
  //   console.log("Data", data);
  //   setDetailData(data);
  // };

  // useEffect(() => {
  //   getBlogDetail();
  // }, []);

  return (
    <div className="">
      <RecentBlog article={article} />
      <div className="container  mx-auto mt-24 max-w-4xl">
        <div>
          <>
            <div>
              <h1 className="text-4xl font-semibold text-slate-900 ">
                {article.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={article.user.profile_image}
                    alt="avatar"
                  />
                  <h4 className="ml-2 text-lg text-gray-500">
                    {article.user.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {formatDate(article.created_at)}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: article.body_html }}
              ></div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();
  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles?per_page=5`);
  const articles = await res.json();
  const resSecond = await fetch(
    "https://dev.to/api/articles/latest?per_page=4"
  );
  const data = await resSecond.json();
  {
    articles.concat(data);
  }
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
