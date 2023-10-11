import React from "react";
import Link from "next/link";
const ErrorPage = () => {
  return (
    <div className=" w-[100%] h-[calc(100vh-357px)]  flex justify-center items-center container mx-auto px-12 ">
      <div className="flex-1 flex justify-end flex-col items-center">
        <h3 className="text-pink-800  text-2xl font-extrabold f">
          This page doesn't exist
        </h3>

        <Link href={"/"} className="w-full m">
          <h3 className="bg-gray-300 rounded-md flex-col p-3 mx-auto text-center ">
            Go back to home
          </h3>
        </Link>
      </div>

      <div className="flex-1 border-l-4 border-l-pink-900 m-8">
        <img
          src="https://seosherpa.com/wp-content/uploads/2020/12/404-error-page-header-transparent.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default ErrorPage;
