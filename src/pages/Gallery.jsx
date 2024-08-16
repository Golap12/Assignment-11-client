import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Gallery = () => {
    const feedbackData = useLoaderData();
    const [feedback, setFeedback] = useState([]);
    const [modal, setModal] = useState(false);
    const [editFeedback, setEditFeedback] = useState({});
    const {user}= useContext(AuthContext);

    useEffect(() => {
        const getUserFeedback = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/allFood`);
            setFeedback(data);
        };
        getUserFeedback();
    }, []);

    const handleEditClick = (data) => {
        setEditFeedback(data);
        setModal(true);
    };



    const handleFeedbackSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;

        const image = form.image.value;
        const userName = form.userName.value;
        const feedback = form.feedback.value;


        const addFeedback = {
            image,
            userName,
            feedback
        };


        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/feedbackAdd`, addFeedback)
            toast.success("Thanks for your feedback")

        }
        catch (error) {
            console.log(error);
        }


        setTimeout(() => {
            setModal(false);
        }, 300);


    }






    const Modal = () => {

        if(user){
            return (
                <div className="fixed inset-0 z-20 flex items-center justify-center bg-black backdrop-blur-sm bg-opacity-70">
                    <div className="bg-gray-800 rounded-lg p-6 md:w-1/3">
                        <h2 className="text-2xl font-bold text-white mb-4">Edit Feedback</h2>
                        <form onSubmit={handleFeedbackSubmit}>
                            <div className="mb-4">
                                <label className="block text-white">User Name:</label>
                                <input
                                    type="text"
                                    name="userName"
                                    className="w-full p-2 rounded"
                                    defaultValue={editFeedback.userName}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white">Feedback:</label>
                                <textarea
                                    name="feedback"
                                    className="w-full p-2 rounded"
                                    defaultValue={editFeedback.feedback}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-white">Image URL:</label>
                                <input
                                    type="text"
                                    name="image"
                                    className="w-full p-2 rounded"
                                    defaultValue={editFeedback.foodImage}
                                    required
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
                            <button
                                type="button"
                                className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
                                onClick={() => setModal(false)}
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            );
        } else{
            return <Navigate to="/login" state={location.pathname}></Navigate>;
        }
        
    };

    return (
        <div className='p-8 md:p-20'>
            {modal && <Modal />}
            <h1 className="text-3xl font-bold text-white text-center mb-2">Gallery</h1>
            <p className="text-gray-400 text-center mb-10">Explore the feedback from our valued users below.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                {
                    feedback.map(data => (
                        <div
                            key={data._id}
                            className="relative w-full h-40 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                            style={{
                                backgroundImage: `url(${data.
                                    foodImage})`
                            }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center text-white p-4">
                                    <h3 className="text-lg font-semibold">{data.userName}</h3>
                                    <p className="text-sm mt-1">{data.feedback}</p>
                                    <button onClick={() => handleEditClick(data)} className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">Add Feedback</button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            <div>
                <div className='flex flex-col justify-items-center items-center'>
                    <h1 className='text-3xl font-bold text-white text-center mt-14'>Customer Feedback</h1>
                    <div className='border border-gray-600 mb-10 mt-2 w-1/3'></div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
                    {
                        feedbackData.map(data => (
                            <div
                                key={data._id}
                                className="relative w-full h-40 bg-cover bg-center rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
                                style={{
                                    backgroundImage: `url(${data.
                                        image})`
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center text-white p-4">
                                        <h3 className="text-lg font-semibold">{data.userName}</h3>
                                        <p className="text-sm mt-1">{data.feedback}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Gallery;
