import { useState } from 'react';
import axios from 'axios'; // Import Axios
import { Link } from 'react-router-dom';

const Register = () => {
    const [company, setCompany] = useState('');
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            company,
            username,
            useremail,
            password
        };

        axios.post('', formData)
            .then(response => {
                console.log('Form submitted successfully:', response.data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div className='flex justify-center'>
            <section className="bg-white ">
                
                    <div className="flex flex-col items-center justify-center px-4 py-16 bg-white">
                    <h2 className="text-3xl font-bold leading-tight pb-8 text-black sm:text-4xl">Register</h2>
                        <div className="w-[400px] sm:w-[500px] p-10 shadow-2xl rounded-xl">
                            
                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900"> Company Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={company}
                                                onChange={(e) => setCompany(e.target.value)}
                                                placeholder="Company/University name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                                placeholder="Enter your name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={useremail}
                                                onChange={(e) => setUseremail(e.target.value)}
                                                placeholder="Enter your mail"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter password"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Create account
                                        </button>
                                    </div>
                                    <Link to="/login" className='text-green-500 hover:text-xl transition-all'>Already a user? Login then</Link>
                                </div>
                            </form>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Register;