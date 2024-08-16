import React, { useContext, useState } from 'react';
import { AuthContext } from './../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate } from 'react-router-dom';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const madeBy = user?.email;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;

        
        const addFood = {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            price,
            madeBy,
            foodOrigin,
            description,
        };

        try{
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-foods`, addFood)
            toast.success("Added Success")
            navigate("/myFood")

        }
        catch (error){
            console.log(error);
        }

    };

    return (
        <div className="container mx-auto px-6 py-5">
            <h1 className="md:text-4xl text-2xl font-bold mb-8 text-center text-white">Add Food Item</h1>
            <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label className="block text-gray-300">Food Name</label>
                    <input
                        name="foodName"
                        type="text"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Food Image URL</label>
                    <input
                        name="foodImage"
                        type="text"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Food Category</label>
                    <input
                        name="foodCategory"
                        type="text"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Quantity</label>
                    <input
                        name="quantity"
                        type="number"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        min="1"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Price</label>
                    <input
                        name="price"
                        type="number"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Added By</label>
                    <input
                        defaultValue={user?.email}
                        readOnly
                        type="text"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300">Food Origin (Country)</label>
                    <input
                        name="foodOrigin"
                        type="text"
                        className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        required
                    />
                </div>
                <div className="mb-4 col-span-1 md:col-span-2">
                    <label className="block text-gray-300">Description</label>
                    <textarea
                        name="description"
                        className="resize-none w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                        rows="4"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-bold rounded hover:bg-pink-400 col-span-1 md:col-span-2"
                >
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default AddFood;
