import React from "react";
import { useRouter } from "next/router";

import { getCategories, getCategoryPost } from "../../services";
import { PostCard, Categories, Loader } from "../../components";

import { useState } from "react";

import { grpahCMSImageLoader } from "../../util";
import Image from "next/image";

const CategoryPost = ({ posts }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts to display per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (totalPages == 0) {
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
              <Categories />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            {currentPosts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
            <div className="lg:col-span-12 col-span-1">
              <div className="flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => handlePageChange(i + 1)}
                      className={`m-2 px-5 py-2 rounded-md ${
                        currentPage === i + 1
                          ? "bg-green-800 text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
