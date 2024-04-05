import React from 'react'

const login = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Welcome Back!</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Login to your account</p>
        </div>

        <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden bg-white rounded-md shadow-md">
                <div className="px-4 py-6 sm:px-8 sm:py-7">
                    <form action="" method="POST">
                        <div className="space-y-5">
                           
                                <label for="" className="text-base font-medium text-gray-900"> Email address </label>

                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <input
                                        type="email"
                                        name=""
                                        id=""
                                        placeholder="Enter email to get started"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                                
                                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                                    <input
                                        type="password"
                                        name=""
                                        id=""
                                        placeholder="Enter your password"
                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                    />
                                </div>
                            

                            <div>
                                <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                    Log in
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default login