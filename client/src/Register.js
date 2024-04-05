import { useState } from 'react';
import axios from 'axios'; // Import Axios

const Register = () => {
    const [companyName, setCompanyName] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [accessCode, setAccessCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            companyName,
            ownerName,
            rollNo,
            ownerEmail,
            accessCode
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
                
                    <div className="flex flex-col items-center justify-center px-4 py-10 bg-white">
                    <h2 className="text-3xl font-bold leading-tight pb-8 text-black sm:text-4xl">Register</h2>
                        <div className="w-[400px] sm:w-[500px] p-10 shadow-2xl rounded-xl">
                            
                            <form onSubmit={handleSubmit} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900"> Company Name </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                                placeholder="Enter your company name"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={ownerName}
                                                onChange={(e) => setOwnerName(e.target.value)}
                                                placeholder="Enter Ownername"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={rollNo}
                                                onChange={(e) => setRollNo(e.target.value)}
                                                placeholder="Enter your Rollno"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={ownerEmail}
                                                onChange={(e) => setOwnerEmail(e.target.value)}
                                                placeholder="Enter your mail"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="text"
                                                value={accessCode}
                                                onChange={(e) => setAccessCode(e.target.value)}
                                                placeholder="Enter accessCode"
                                                className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                            Create account
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Register;