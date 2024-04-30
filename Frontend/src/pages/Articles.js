import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Articles = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/articles/posts');
      setPosts(response.data.reverse());
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <>
      {posts.map(post => (
        <div key={post._id}>
          <section className="pt-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 space-y-5">
              <div className="grid items-center grid-cols-1 xl:items-stretch lg:grid-cols-2 gap-y-8 gap-x-12 sm:p-10 pt-10 rounded-2xl">
                <img className="object-cover w-full h-full rounded-2xl" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/5/man-using-phone.jpg" alt="" />
                <div className="flex flex-col justify-between md:py-5">
                  <h2 className="sm:text-3xl font-bold text-xl ">{post.title}</h2>
                  <p className="overflow-hidden max-h-[137px] sm:text-2xl leading-relaxed text-[15px] text-black">{post.content}</p>
                  <div className="mt-6 lg:mt-auto">
                    <p className="sm:text-xl text-[15px] font-semibold text-black">{post.username}</p>
                    <p className="mt-2 text-base text-[10px] sm:text-xl text-gray-600">{post.company}</p>
                  </div>
                  <p className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600 w-fit">Continue Reading</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </>
  );
};

export default Articles;
