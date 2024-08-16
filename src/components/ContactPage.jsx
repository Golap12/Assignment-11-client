import React from 'react';
import { FaBug, FaPhoneAlt, FaQuestionCircle, FaRegNewspaper } from 'react-icons/fa';
import Lottie from 'react-lottie';
import messageAnimationData from '../../public/message.json';
import toast from 'react-hot-toast';

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success('Form submitted!');
    };

    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: messageAnimationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="container my-12 mx-auto px-4 md:px-8">
            <section className="mb-32 bg-gray-900 text-gray-200 p-8 rounded-lg shadow-lg">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-orange-500">Contact Us</h2>
                    <p className="text-gray-400 mt-2">We are here to assist you!</p>
                </div>

                <div className="flex flex-wrap justify-between">
                    <form onSubmit={handleSubmit} className="w-full lg:w-5/12 mb-12 lg:mb-0 bg-gray-800 p-6 rounded-lg shadow-md">
                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="name">Name</label>
                            <input type="text" id="name" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-500" placeholder="Enter your name" required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-500" placeholder="Enter your email" required />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-300 mb-2" htmlFor="message">Message</label>
                            <textarea id="message" className="resize-none w-full p-3 h-40 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-orange-500" placeholder="Write your message" required></textarea>
                        </div>

                        <button type="submit" className="w-full py-3 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors">Send</button>
                    </form>

                    <div className="w-full lg:w-7/12">

                        <div className='w-full'>
                            <Lottie options={defaultOptions} height={300} width={300} />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-6/12 mb-8 px-4">
                                <div className="flex items-start">
                                    <div className="inline-block p-4 rounded-full bg-orange-500 text-white">
                                        <FaPhoneAlt className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-lg text-white">Technical Support</p>
                                        <p className="text-gray-400">support@example.com</p>
                                        <p className="text-gray-400">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 mb-8 px-4">
                                <div className="flex items-start">
                                    <div className="inline-block p-4 rounded-full bg-orange-500 text-white">
                                        <FaQuestionCircle className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-lg text-white">Sales Questions</p>
                                        <p className="text-gray-400">sales@example.com</p>
                                        <p className="text-gray-400">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 mb-8 px-4">
                                <div className="flex items-start">
                                    <div className="inline-block p-4 rounded-full bg-orange-500 text-white">
                                        <FaRegNewspaper className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-lg text-white">Press</p>
                                        <p className="text-gray-400">press@example.com</p>
                                        <p className="text-gray-400">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-6/12 mb-8 px-4">
                                <div className="flex items-start">
                                    <div className="inline-block p-4 rounded-full bg-orange-500 text-white">
                                        <FaBug className="h-6 w-6" />
                                    </div>
                                    <div className="ml-4">
                                        <p className="font-bold text-lg text-white">Bug Report</p>
                                        <p className="text-gray-400">bugs@example.com</p>
                                        <p className="text-gray-400">+1 234-567-89</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
