import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
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
   
    

    <div className="bg-yellow-50">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px] z-auto">
            <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
               
                <div className="px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    <h1 className="text-3xl font-bold text-black sm:text-5xl xl:text-7xl">
                        Start Connecting<br />
                        With fellow bloggers
                    </h1>
                    <p className="mt-8 text-xl text-black">We help you to make your remote work life easier. Build a distruction free working experience.</p>
                    <Link to="/create" className="mt-5 text-base text-green-500 hover:text-2xl transition-all">Feel Free to Post Blogs</Link>
                </div>
            </div>
        </div>
    </div>

    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left">

                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Latest from blog
                </h2>

                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                  </p>

            </div>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">

        {posts.slice(0, 3).map(post => (
    <div key={post._id} className="overflow-y-hidden w-[400px] bg-white rounded shadow">
        <div className="p-5">
            <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
            <p className="mt-5 text-2xl font-semibold">{post.title}</p>
            <p className="mt-4 text-base text-gray-600">{post.content}</p>
            <p className="mt-4 text-xl text-black">{post.username}</p>
            <p className="mt-4 text-base text-gray-400">{post.company}</p>
            <p className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                Continue Reading
            </p>
        </div>
    </div>
))}

        </div>
        
    </div>
</section>

<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
                <div className="pl-12 pr-6">
                    <img  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg" alt="" />
                </div>
                
            <div className="2xl:pl-16">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">We make things easy for projects.</h2>
                <p className="text-xl leading-relaxed text-gray-900 mt-9">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia conse duis enim velit mollit. Exercitation veniam.
                  </p>
                <p className="mt-6 text-xl leading-relaxed text-gray-900">
                  Velit officia conse duis enim velit mollit. Exercit ation veniam consequat sunt nostrud amet.
                  </p>
            </div>
        </div>
    </div>
</section>

<section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Questions & Answers
              </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">
              Explore the common questions and answers about Celebration
              </p>
        </div>

        <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">
                      How to create an account?
                      </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                      </p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">
                      How can I make payment?
                      </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                      </p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">
                      Do you provide discounts?
                      </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                      </p>
                </div>
            </div>

            <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                    <span className="text-lg font-semibold text-white">?</span>
                </div>
                <div className="ml-4">
                    <p className="text-xl font-semibold text-white">
                      How do you provide support?
                      </p>
                    <p className="mt-4 text-base text-gray-400">
                      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                      </p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">People who made it successful</h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            <div>
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-1.jpg" alt="" />
            </div>

            <div>
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-2.jpg" alt="" />
            </div>

            <div>
                <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/6/team-member-3.jpg" alt="" />
            </div>
        </div>
    </div>
</section>

</>

  )
}

export default Home