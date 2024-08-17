import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './../provider/AuthProvider';
import { FaEdit, FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import NoDataAnimation from '../components/NoDataAnimation';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const MyAddedFood = () => {
    const [myData, setMyData] = useState([]);
    const { user } = useContext(AuthContext);
    const [modal, setModal] = useState(false);
    const [editFood, setEditFood] = useState({});

    useEffect(() => {
        getAllFoodData();
    }, [user]);

    const getAllFoodData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/user/${user?.email}`,
                {
                    withCredentials: true
                }
            );
            setMyData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API_URL}/food/user/${id}`);
            toast.success("Deleted Successfully");
            getAllFoodData();
        } catch (err) {
            console.log(err.message);
            toast.error(err.message);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodCategory = form.foodCategory.value;
        const quantity = form.quantity.value;
        const price = parseFloat(form.price.value);
        const addedBy = user?.email;
        const foodOrigin = form.foodOrigin.value;
        const description = form.description.value;

        const updateFood = {
            foodName,
            foodImage,
            foodCategory,
            quantity,
            price,
            addedBy,
            foodOrigin,
            description,
        };

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/food/user/${editFood._id}`, updateFood);
            toast.success("Update Success");
            getAllFoodData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (food) => {
        setModal(true);
        setEditFood(food);
    };

    const Modal = () => {
        return (
            <motion.div
                className="fixed inset-0 flex items-center justify-center px-5 md:px-0 bg-black bg-opacity-40 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                <motion.div
                    className="bg-gray-800 rounded-lg md:p-10 p-5 shadow-lg max-w-xl w-full"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-2xl font-bold mb-2 text-white text-center">Update Food Item</h1>
                    <p className="text-sm text-gray-300 mb-6 text-center">
                        Update the details of your food item below. Make sure all fields are filled in correctly before submitting.
                    </p>
                    <form onSubmit={handleUpdate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Form Fields */}
                        <div className="mb-4">
                            <label className="block text-gray-300">Food Name</label>
                            <input
                                defaultValue={editFood?.foodName}
                                name="foodName"
                                type="text"
                                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Food Image URL</label>
                            <input
                                defaultValue={editFood?.foodImage}
                                name="foodImage"
                                type="text"
                                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Food Category</label>
                            <input
                                defaultValue={editFood?.foodCategory}
                                name="foodCategory"
                                type="text"
                                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-300">Quantity</label>
                            <input
                                defaultValue={editFood?.quantity}
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
                                defaultValue={editFood?.price}
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
                                defaultValue={editFood?.foodOrigin}
                                name="foodOrigin"
                                type="text"
                                className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                required
                            />
                        </div>
                        <div className="mb-4 col-span-1 md:col-span-2">
                            <label className="block text-gray-300">Description</label>
                            <textarea
                                defaultValue={editFood?.description}
                                name="description"
                                className="resize-none w-full p-2 border border-gray-600 bg-gray-700 text-white rounded"
                                rows="4"
                                required
                            />
                        </div>
                        <div className="col-span-1 md:col-span-2 text-center">
                            <button
                                type="button"
                                className="bg-red-500 text-white font-bold rounded px-4 py-2 hover:bg-red-400"
                                onClick={() => setModal(false)}
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    setTimeout(() => {
                                        setModal(false);
                                    }, 100);
                                }}
                                type="submit"
                                className="ml-4 bg-green-500 text-white font-bold rounded px-4 py-2 hover:bg-green-400"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </motion.div>
            </motion.div>
        );
    };

    return (
        <div className={`${modal && "md:h-[120vh] h-[1080px] "} overflow-x-auto md:p-10 p-5 bg-gray-900 backdrop-blur-lg text-gray-300 relative`}>
            <Helmet>
                <title>Foodie's | My Added</title>
            </Helmet>
            <motion.div
                className="overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Added Food List</h2>
                <p className="text-gray-400 mb-6 text-center">
                    Here you can view, edit, or delete the food items you have ordered. Manage your orders efficiently!
                </p>
            </motion.div>

            {modal && <Modal />}

            {myData && myData.length > 0 ? (
                <motion.div
                    className="overflow-x-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className='bg-gray-700'>
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800 divide-y divide-gray-700">
                            {myData.map((food) => (
                                <motion.tr
                                    key={food._id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={food.foodImage} alt={food.foodName} className="h-12 w-12 rounded-md" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.foodName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{food.foodCategory}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">${food.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                        <button onClick={() => handleEditClick(food)} className="text-blue-500 hover:text-blue-300">
                                            <FaEdit size={20} />
                                        </button>
                                        <button onClick={() => handleDelete(food._id)} className="ml-4 text-red-500 hover:text-red-300">
                                            <FaTrash size={20} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            ) : (
                <motion.div
                    className="flex flex-col items-center justify-center col-span-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <NoDataAnimation />
                </motion.div>
            )}
        </div>
    );
};

export default MyAddedFood;
