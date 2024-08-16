import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaTag, FaBox , FaInfoCircle, FaDollarSign, FaUser, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

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
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full object-cover" src={foodImage} alt="Product Image" />
                        </div>
                    </div>

                    <div className='border'></div>

                    <div className="md:flex-1 px-4 flex flex-col justify-center">
                        
                    <div className='mb-5'>
                            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white">{foodName}</h2>
                            <div className="flex items-center mt-4">
                                <FaBox className={`text-gray-700 dark:text-gray-300 ${quantity === 0 ? 'text-red-500' : ''}`} />
                                <p className={`font-bold text-gray-700 dark:text-gray-300 ml-2 ${quantity === 0 ? 'text-red-500' : ''}`}>
                                    {quantity > 0 ? `Quantity: ${quantity}` : 'Not available'}
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center mb-4 space-x-2">
                            <FaTag className="text-gray-700 dark:text-gray-300" />
                            <span className="font-bold text-gray-700 dark:text-gray-300">Category: </span>
                            <span className="text-gray-600 dark:text-gray-300">{foodCategory}</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex items-center space-x-2">
                            <FaInfoCircle className="text-gray-600 dark:text-gray-300" />
                            <span>{description}</span>
                        </p>
                        <div className="mb-4 space-y-4">
                            <div className="flex items-center space-x-2">
                                <FaDollarSign className="text-gray-700 dark:text-gray-300" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price: </span>
                                <span className="text-gray-600 dark:text-gray-300">${price}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaShoppingCart className="text-gray-700 dark:text-gray-300" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Purchase Count: </span>
                                <span className="text-gray-600 dark:text-gray-300">{purchase_count}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaUser className="text-gray-700 dark:text-gray-300" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Made By: </span>
                                <span className="text-gray-600 dark:text-gray-300">{madeBy}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="text-gray-700 dark:text-gray-300" />
                                <span className="font-bold text-gray-700 dark:text-gray-300">Food Origin: </span>
                                <span className="text-gray-600 dark:text-gray-300">{foodOrigin}</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <button
                                onClick={() => handlePurchase(food)}
                                className={`py-2 px-4 rounded-sm font-bold ${quantity === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-600 hover:bg-orange-700 duration-300'} text-white`}
                                disabled={quantity === 0}
                            >
                                {quantity > 0 ? 'Purchase' : 'Stock Out'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
