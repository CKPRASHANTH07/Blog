import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [title, setTitle] = useState('hello');
  const [content, setContent] = useState('hello');
  const [username, setUsername] = useState('hello');
  const [company, setCompany] = useState('hello');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:8000/articles/posts', { title, content,username, company });
      console.log('Response:', response.data);
      // Optionally, you can reset the form fields here
      setTitle('');
      setContent('');
      setUsername('');
      setCompany('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error posting content:', error.response.data);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className='bg-white h-screen flex justify-center items-center'>
      <div className="space-y-5 w-fit pt-10 h-fit shadow-2xl p-10 rounded-xl bg-black bg-opacity-75">
        <h2 className="text-base font-medium text-white">Add a Blog</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="text-gray-400  focus-within:text-gray-600 space-y-5">
          <div className='flex space-x-10'>
            <div className='space-y-16'>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter heading"
              className="block w-[500px] py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />

            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter YourName"
              className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter YourCompany/University"
              className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter the content"
              className="block w-[500px] min-h-[300px] py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
            />
          </div>
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
