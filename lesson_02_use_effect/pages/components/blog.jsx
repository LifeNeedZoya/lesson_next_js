import React from "react";

const Blog = ({ blog }) => {
  return (
    <div>
      {" "}
      <div className="border flex flex-col p-2 ">
        <img
          src={blog.cover_image ? blog.cover_image : "/images/pic.jpg"}
          alt=""
          width={600}
          height={500}
          className=""
        />
        <div>
          <h5>{blog?.type_of}</h5>
          <h2>{blog.title}</h2>
          <div className="flex items-center ">
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
    </div>
  );
};

export default Blog;
