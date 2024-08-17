import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaTag, FaBox, FaInfoCircle, FaDollarSign, FaUser, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();
    const navigate = useNavigate();

    const {
        foodImage,
        foodName,
        foodCategory,
        price,
        quantity,
        madeBy,
        foodOrigin,
        description,
        purchase_count
    } = food;

    const handlePurchase = async (food) => {
        navigate('/checkOut', { state: { food } });
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <Helmet>
                <title>Foodie's | Details</title>
            </Helmet>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-5">
                    <motion.div
                        className="md:flex-1 px-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={foodImage} alt="Product Image" />
                        </div>
                    </motion.div>

                    <div className='border'></div>

                    <motion.div
                        className="md:flex-1 px-4 flex flex-col justify-center"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='mb-5'>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">
                                {foodName}
                            </h2>


                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 flex items-center space-x-2">
                                <FaInfoCircle size={18} className="text-[#007bff]" />
                                <span>{description}</span>
                            </p>

                            <div className="flex items-center mt-4">
                                <FaBox className={`${quantity === 0 ? 'text-red-500' : 'text-green-600'}`} />
                                <p className={`font-bold ml-2 ${quantity === 0 ? 'text-red-500' : 'text-green-600'}`}>
                                    {quantity > 0 ? `Quantity : ${quantity}` : 'Item is not available'}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center mb-4 space-x-2">
                            <FaTag className="text-[#20c997]" />
                            <span className="font-bold text-gray-700 dark:text-gray-300">Category : </span>
                            <span className="text-gray-600 dark:text-gray-300">{foodCategory}</span>
                        </div>

                        <div className="mb-4 space-y-4">
                            <div className="flex items-center space-x-2">
                                <FaDollarSign className="text-[#28a745]" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price : </span>
                                <span className="text-gray-600 dark:text-gray-300">${price}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaShoppingCart className="text-[#f39c12]" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Purchase Count : </span>
                                <span className="text-gray-600 dark:text-gray-300">{purchase_count}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaUser className="text-[#007bff]" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Made By : </span>
                                <span className="text-gray-600 dark:text-gray-300">{madeBy}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="text-[#dc3545]" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Food Origin : </span>
                                <span className="text-gray-600 dark:text-gray-300">{foodOrigin}</span>
                            </div>
                        </div>

                        <motion.div
                            className="mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <button
                                onClick={() => handlePurchase(food)}
                                className={`py-2 px-4 rounded-sm font-bold ${quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 duration-300'} text-white`}
                                disabled={quantity === 0}
                            >
                                {quantity > 0 ? 'Purchase' : 'Stock Out'}
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
