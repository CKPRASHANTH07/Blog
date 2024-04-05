import React from 'react'

function Create() {
  return (
    <div className='bg-white h-screen flex  justify-center items-center '>
    <div className="space-y-5 w-[500px] pt-10 h-fit  shadow-2xl p-10 rounded-xl bg-black bg-opacity-75 ">
                           
                                <label for="" className="text-base font-medium text-white"> Add a Blog </label>

                                <div className="mt-2.5 text-gray-400 focus-within:text-gray-600">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        placeholder="Enter heading"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                                
                                <div className="mt-2.5 text-gray-400 focus-within:text-gray-600">
                                <textarea
                                       name=""
                                       id=""
                                       placeholder="Enter the content"
                                       class="block w-full min-h-[300px] py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                                </div>
                            

                            <div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    post
                                </button>
                            </div>
                            </div>
                        </div>
  )
}

export default Create