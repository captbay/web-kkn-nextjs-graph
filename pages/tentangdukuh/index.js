import React from "react";
import { useRouter } from "next/router";

import { Loader } from "../../components";

import { grpahCMSImageLoader } from "../../util";
import Image from "next/image";

const PostDetails = ({}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-10 h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8 h-full">
            <div className="flex justify-center items-center h-full flex-col">
              <div>
                <Image
                  unoptimized
                  loader={grpahCMSImageLoader}
                  alt="404"
                  height={300}
                  width={300}
                  src="/404.jpg"
                ></Image>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  No posts found
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
              <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Categories
              </h3>
              {/* {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <span
                    className={`cursor-pointer block ${
                      index === categories.length - 1
                        ? "border-b-0"
                        : "border-b"
                    } pb-3 mb-3`}
                  >
                    {category.name}
                  </span>
                </Link>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
