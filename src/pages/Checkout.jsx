import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import {
    FaTags,
    FaBox,
    FaDollarSign,
    FaUser,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInfoCircle,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { food } = location.state || {};

    if (!food) {
        return <Navigate to="/" />;
    }

    const {
        foodImage,
        foodName,
        foodCategory,
        price,
        quantity,
        madeBy,
        foodOrigin,
        description,
        purchase_count,
    } = food;

    const [purchaseQuantity, setPurchaseQuantity] = useState(1);

    const increaseQuantity = () => {
        if (purchaseQuantity < quantity) {
            setPurchaseQuantity(purchaseQuantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (purchaseQuantity > 1) {
            setPurchaseQuantity(purchaseQuantity - 1);
        }
    };

    const handlePurchase = async () => {
        if (purchaseQuantity <= 0) {
            toast.error('Invalid quantity for purchase');
            return;
        }

        if (purchaseQuantity > quantity) {
            toast.error('Requested quantity exceeds available stock');
            return;
        }

        const purchaseFood = {
            foodName,
            foodImage,
            foodCategory,
            quantity: quantity - purchaseQuantity,
            madeBy,
            price,
            purchaseBy: user?.email,
            foodOrigin,
            description,
            purchase_count: purchase_count + purchaseQuantity,
            purchaseDate: Date.now(),
        };

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/purchase-foods`, purchaseFood);
            toast.success('Purchase Success');
            navigate('/myOrderFood');
        } catch (error) {
            console.log(error);
        }

        handleUpdateQP(food, purchaseQuantity);
    };

    const handleUpdateQP = async (food, purchasedQuantity) => {
        const updateQntAndPrc = {
            quantity: quantity - purchasedQuantity,
            purchase_count: purchase_count + purchasedQuantity,
        };

        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/food/user/${food._id}`, updateQntAndPrc);
        } catch (error) {
            console.log(error);
        }
    };

    const totalPrice = price * purchaseQuantity;

    return (
        <div className="bg-gray-900 py-12 min-h-screen flex flex-col justify-center items-center">
            <Helmet>
                <title>Foodie's | Checkout</title>
            </Helmet>
            <motion.h1
                className="text-3xl font-bold text-gray-100 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Checkout
            </motion.h1>

            <motion.div
                className="bg-gray-800 rounded-lg shadow-lg max-w-4xl w-full mx-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="p-6">
                    <div className="flex flex-col md:flex-row">
                        <motion.div
                            className="relative w-full md:w-1/2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={foodImage}
                                alt={foodName}
                                className="object-cover w-full h-64 md:h-full rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                            />
                        </motion.div>

                        <div className="flex-auto p-6">
                            <motion.h2
                                className="text-2xl font-bold text-gray-100 mb-4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {foodName}
                            </motion.h2>
                            <p className="text-gray-300 mb-4">{description}</p>

                            <div className="flex flex-col md:flex-row md:justify-between">

                                {/* Icons and Titles */}
                                <div className="flex flex-col space-y-4 ">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaDollarSign className="mr-2 text-[#28a745]" />
                                        <span className="font-semibold">Price:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaTags className="mr-2 text-yellow-500" />
                                        <span className="font-semibold">Category:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaBox className="mr-2" />
                                        <span className="font-semibold">In stock:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaUser className="mr-2 text-blue-500" />
                                        <span className="font-semibold">Made By:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaMapMarkerAlt className="mr-2 text-red-500" />
                                        <span className="font-semibold">Origin:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaInfoCircle className="mr-2 text-teal-500" />
                                        <span className="font-semibold">Purchase Count:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaUser className="mr-2 text-blue-500" />
                                        <span className="font-semibold">Your Name:</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <FaEnvelope className="mr-2 text-gray-500" />
                                        <span className="font-semibold">Your Email:</span>
                                    </div>
                                </div>

                                {/* Information */}
                                <div className="">
                                    <div className="space-y-4">
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">${price}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{foodCategory}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{quantity > 0 ? `In stock: ${quantity}` : 'Out of stock'}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{madeBy}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{foodOrigin}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{purchase_count}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{user?.displayName || 'N/A'}</p>
                                        </div>
                                        <div className="flex items-center text-gray-300">

                                            <p className="text-sm">{user?.email || 'N/A'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="flex items-center gap-4 mt-4">
                                <button
                                    onClick={decreaseQuantity}
                                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-2 rounded"
                                >
                                    -
                                </button>
                                <span className="text-xl font-semibold text-gray-100">
                                    {purchaseQuantity}
                                </span>
                                <button
                                    onClick={increaseQuantity}
                                    className="bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-2 rounded"
                                >
                                    +
                                </button>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-2xl font-semibold text-gray-300 mb-2">
                                    Total Price: ${totalPrice}
                                </h4>
                            </div>
                            <motion.button
                                className="w-full bg-green-600 text-white text-lg font-semibold py-3 rounded hover:bg-green-700 transition duration-200"
                                onClick={handlePurchase}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Purchase Now
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Checkout;
